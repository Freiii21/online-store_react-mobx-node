import React, { useContext } from "react";
import { observer } from "mobx-react";
import { AppContext } from "index";
import { AppContextType } from "types";
import { Pagination } from "react-bootstrap";

export const Pages = observer(() => {
	const { device } = useContext(AppContext) as AppContextType;
	const pagesCount = Math.ceil(device.totalPages / device.itemsOnPage);
	const pages = [];

	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}

	return (
		<Pagination className={"mt-5"}>
			{pages.map((page) => (
				<Pagination.Item key={page} active={device.currentPage === page} onClick={() => device.setCurrentPage(page)}>
					{page}
				</Pagination.Item>
			))}
		</Pagination>
	);
});
