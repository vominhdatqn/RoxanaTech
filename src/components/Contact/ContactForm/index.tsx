"use client";

import React, { useRef, useState } from "react";
import {
  Button,
  Form as FormAntDeisgn,
  Input,
  DatePicker,
  message,
  Typography,
  Space,
  TimePicker,
} from "antd";
import type { FormInstance } from "antd/es/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { isVietnamesePhoneNumber } from "../../../utils";
import { FormItem } from "@/components/Form";
import { isEmpty } from "lodash";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../lib/firebase";

const { Title, Text } = Typography;

const currentDate = dayjs();

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  calendar: currentDate as Dayjs,
  // time: dayjs(currentDate.format('HH:mm'), 'HH:mm').add(1, 'hour'),
  description: "",
};

const schema = yup
  .object({
    name: yup.string().required("Vui lòng nhập họ tên của bạn!"),
    phone: yup
      .string()
      .required("Vui lòng nhập số điện thoại của bạn!")
      .test("phone", "Số điên thoại sai định dạng", (str, context) => {
        return isVietnamesePhoneNumber(str);
      }),
    email: yup
      .string()
      .email("Sai định dang email. Ví dụ abc@gmail.com")
      .required("Vui lòng nhập họ tên của bạn!"),
    calendar: yup
      .date()
      .min(
        currentDate,
        "Ngày hẹn dự kiến phải lớn hơn hoặc bằng ngày hiện tại!"
      ),
    // time: yup
    //   .date()
    //   .transform((currentValue, originalValue) => {
    //     // Transform the TimePicker value into a Date object
    //     return originalValue ? dayjs(originalValue, 'HH:mm').toDate() : null;
    //   })
    //   .nullable()
    //   .test('is-valid-time', 'Thời gian dự kiến phải nằm trong khung giờ từ 9:00 - 21:30', (value) => {
    //     if (!value) return false; // Handle null or undefined values

    //     const selectedTime = dayjs(value);

    //     const startTime = dayjs('09:00', 'HH:mm');
    //     const endTime = dayjs('21:30', 'HH:mm');

    //     return selectedTime.isAfter(startTime) && selectedTime.isBefore(endTime);
    //   }).required('Vui lòng chọn thời gian dự kiến!'),
    description: yup.string(),
  })
  .required();

const dateFormat = "DD-MM-YYYY";

export default function ContactForm() {
  const formRef = useRef<FormInstance>(null);
  const [form] = FormAntDeisgn.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  // console.log('21321', errors)
  return (
    // <div className='w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-xl shadow-2xl lg:max-w-xl shadow-gray-500/50 '>
    <>
      <Title level={3}>Thông tin liên hệ</Title>
      {contextHolder}
      <FormAntDeisgn
        form={form}
        name="control-contect-ref"
        ref={formRef}
        layout="vertical"
        initialValues={defaultValues}
        onFinish={handleSubmit(async (data) => {
          // console.log('data', ay);
          setLoading(true);
          const newItem = {
            ...data,
            name: data?.name,
            phone: data?.phone,
            calendar: data?.calendar.toISOString(),
            // time: data?.time?.toISOString(),
            createTime: data?.calendar.toISOString(),
          };
          const docRef = await addDoc(
            collection(firestore, "booking"),
            newItem
          );
          if (docRef.id) {
            setTimeout(() => {
              setLoading(false);
              form.resetFields();
              formRef.current?.resetFields();
              reset();
              messageApi.open({
                type: "success",
                content: (
                  <Space direction="vertical">
                    <Text strong>
                      Gửi thông tin liên hệ đến RoxanaTech thành công!
                    </Text>
                    <Text>
                      Chúng tôi sẽ liên hệ với khách hàng trong thời gian sớm
                      nhất
                    </Text>
                  </Space>
                ),
                duration: 5,
              });
            }, 2000);
          }
        })}
      >
        <FormItem control={control} name="name" label="Họ và tên">
          <Input placeholder="Nhập họ và tên của bạn!" className="h-[48px]" />
        </FormItem>
        <FormItem control={control} name="phone" label="Số điện thoại">
          <Input
            placeholder="Nhập số điện thoại của bạn!"
            inputMode="numeric"
            className="h-[48px]"
          />
        </FormItem>
        <FormItem control={control} name="email" label="Địa chỉ email">
          <Input
            placeholder="Nhập địa chỉ email của bạn!"
            inputMode="numeric"
            className="h-[48px]"
          />
        </FormItem>
        <FormItem control={control} name="calendar" label="Ngày dự kiến">
          <DatePicker
            format={dateFormat}
            placeholder="Vui lòng chọn ngày dự kiến"
            style={{ width: "100%" }}
            className="h-[48px]"
          />
        </FormItem>
        {/* <FormItem control={control} name='time' label="Thời gian dự kiến">
          <TimePicker placeholder='Thời gian' format="HH:mm" className='h-[48px]' />
        </FormItem> */}
        <FormItem control={control} name="description" label="Ghi chú">
          <Input.TextArea placeholder="Nhập ghi chú của bạn!" rows={6} />
        </FormItem>
        <Button
          loading={loading}
          disabled={!isEmpty(errors)}
          type="primary"
          htmlType="submit"
          block
          size="large"
        >
          Gửi thông tin
        </Button>
      </FormAntDeisgn>
      {/* </div> */}
    </>
  );
}
