import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Form as FormAntDeisgn,
  Input,
  DatePicker,
  message,
  TimePicker,
} from "antd";
import type { FormInstance } from "antd/es/form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useRef, useState } from "react";
import { FormItem } from "@/components/Form";
import { isVietnamesePhoneNumber } from "../../../utils";
import { isEmpty } from "lodash";
import { firestore } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const currentDate = dayjs();

const schema = yup
  .object({
    name: yup.string().required("Vui lòng nhập họ tên của bạn!"),
    phone: yup
      .string()
      .required("Vui lòng nhập số điện thoại của bạn!")
      .test("phone", "Số điên thoại sai định dạng", (str, context) => {
        return isVietnamesePhoneNumber(str);
      }),
    time: yup
      .date()
      .transform((currentValue, originalValue) => {
        // Transform the TimePicker value into a Date object
        return originalValue ? dayjs(originalValue, "HH:mm").toDate() : null;
      })
      .nullable()
      .test(
        "is-valid-time",
        "Thời gian dự kiến phải nằm trong khung giờ từ 9:00 - 21:30",
        (value) => {
          if (!value) return false; // Handle null or undefined values

          const selectedTime = dayjs(value);

          const startTime = dayjs("09:00", "HH:mm");
          const endTime = dayjs("21:30", "HH:mm");

          return (
            selectedTime.isAfter(startTime) && selectedTime.isBefore(endTime)
          );
        }
      )
      .required("Vui lòng chọn thời gian dự kiến!"),
    calendar: yup
      .date()
      .min(
        currentDate,
        "Ngày hẹn dự kiến phải lớn hơn hoặc bằng ngày hiện tại!"
      ),
  })
  .required();

const dateFormat = "DD-MM-YYYY";
dayjs.locale("vi");

const defaultValues = {
  name: "",
  phone: "",
  calendar: currentDate as Dayjs,
  time: dayjs(currentDate.format("HH:mm"), "HH:mm").add(1, "hour"),
};

interface OrderTimeFormProps {
  handleClose?: () => void;
}
const OrderTimeForm = ({ handleClose }: OrderTimeFormProps) => {
  const formRef = useRef<FormInstance>(null);
  const [form] = FormAntDeisgn.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<any>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  return (
    <>
      {contextHolder}
      <FormAntDeisgn
        form={form}
        name="control-ref"
        ref={formRef}
        layout="vertical"
        initialValues={defaultValues}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(async (data) => {
          try {
            setLoading(true);
            const newItem = {
              name: data?.name,
              phone: data?.phone,
              time: data?.time?.toISOString(),
              createTime: data?.calendar.toISOString(),
            };
            const docRef = await addDoc(
              collection(firestore, "booking"),
              newItem
            );
            if (docRef.id) {
              setTimeout(() => {
                setLoading(false);
                handleClose?.();
                form.resetFields();
                formRef.current?.resetFields();
                reset();
                messageApi.open({
                  type: "success",
                  content: "Đặt hẹn thành công",
                });
              }, 1500);
            }
          } catch (error) {
            console.log("error orderTimeForm", error);
          }
          // const handleAddTeam = async () => {
          // try {
          //   const docRef = await addDoc(collection(firestore, 'team'), newItem)
          //   console.log("Document written with ID: ", docRef.id);
          // } catch (e) {
          //   console.error("Error adding document: ", e);
          // }
          //   }
          // console.log(data);
        })}
      >
        <FormItem control={control} name="name" label="Họ và tên">
          <Input allowClear className="h-[48px]" placeholder="Nhập họ và tên" />
        </FormItem>
        <FormItem control={control} name="phone" label="Số điện thoại">
          <Input
            allowClear
            className="h-[48px]"
            placeholder="Nhập số điện thoại"
            inputMode="numeric"
          />
        </FormItem>
        <FormItem control={control} name="calendar" label="Ngày dự kiến">
          <DatePicker
            className="h-[48px]"
            format={dateFormat}
            placeholder="Vui lòng chọn ngày dự kiến"
            style={{ width: "100%" }}
          />
        </FormItem>
        <FormItem control={control} name="time" label="Thời gian dự kiến">
          <TimePicker
            placeholder="Thời gian"
            format="HH:mm"
            className="h-[48px]"
          />
        </FormItem>
        <div className="flex justify-end pt-4">
          <Button
            size="large"
            loading={loading}
            disabled={!isEmpty(errors)}
            type="primary"
            htmlType="submit"
          >
            Đặt ngay
          </Button>
        </div>
      </FormAntDeisgn>
    </>
  );
};

export default OrderTimeForm;
