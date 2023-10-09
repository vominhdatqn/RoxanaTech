import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react'
import { Avatar, Button, Divider, Input, Modal, ModalProps, Skeleton } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

interface SearchFilterRef {
	onShow: () => void
	onClose: () => void
}
const SearchFilter: ForwardRefRenderFunction<SearchFilterRef, ModalProps> = (props, ref) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleShow = () => {
		setIsOpen(true)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	useImperativeHandle(ref, () => ({
		onShow: handleShow,
		onClose: handleClose
	}) as SearchFilterRef)
	const url = 'https://firebasestorage.googleapis.com/v0/b/mardoll-studio.appspot.com/o/bang-gia-background.jpeg?alt=media&token=d98fc0f6-77a5-407e-83a3-2d6e1c2b39a5';

	return (
		<Modal
			open={isOpen}
			closeIcon={false}
			className='search-filter'
			onCancel={handleClose}
			footer={null}
			{...props}>
			<div>
				<Input prefix={<SearchOutlined size={24} />} placeholder="Tìm kiếm" allowClear bordered={false} />
				<Divider style={{ marginTop: 8, marginBottom: 0 }} />
				<div className='search-results px-4'>
					<div className="recent py-3">
						<p className="text-base font-semibold text-gray-500">Tìm kiếm gần đây</p>
						{new Array(3).fill('').map((item, index) => {
							return (
								<div key={index} className="flex items-center gap-2 my-2">
									<Skeleton loading={true} active avatar>
										<Avatar src={<img src={url} alt="avatar" />} />
										<p className='text-base'>Váy cưới loại Beauty</p>
									</Skeleton>
								</div>
							)
						})}
						<Divider />
						<p className="text-base font-semibold text-gray-500">Đề xuất</p>
						{new Array(3).fill('').map((item, index) => {
							return (<div key={index} className="flex items-center gap-2 my-2">
								<Avatar src={<img src={url} alt="avatar" />} />
								<p className='text-base'>Chụp hình cưới kiểu hàn quốc</p>
							</div>)
						})}
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default forwardRef<SearchFilterRef, ModalProps>(SearchFilter)

export type {
	SearchFilterRef
}