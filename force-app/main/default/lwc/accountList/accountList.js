import { LightningElement, api, wire } from "lwc";

import getAccounts from "@salesforce/apex/AccountListController.getAccounts";

const ACCOUNT_COLUMNS = [
	{ fieldName: "Name", label: "Name" },
	{ fieldName: "Type", label: "Type" }
];

export default class AccountList extends LightningElement {
	@api apiName;
	@api listViewApiName;

	columnsList = ACCOUNT_COLUMNS;

	@wire(getAccounts)
	wiredAccounts;

	handleRowSelection(event) {
		const itemSelected = new CustomEvent("itemselected", {
			detail: {
				recordId: event.detail.selectedRows[0].Id,
				accountName: event.detail.selectedRows[0].Name
			}
		});
		this.dispatchEvent(itemSelected);
	}
}