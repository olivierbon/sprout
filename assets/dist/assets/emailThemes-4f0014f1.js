class a{constructor(e){this.adminTableId=e,this.container=document.querySelector(this.adminTableId),this.tableData=JSON.parse(this.container.dataset.tableData),this.initVueAdminTable()}initVueAdminTable(){let e=[{name:"labelHtml",title:Craft.t("sprout-module-mailer","Name"),callback:function(t){return'<a class="cell-bold" href="'+t.url+'">'+t.name+"</a>"}},{name:"emailThemeType",title:Craft.t("sprout-module-mailer","Email Theme")}];new Craft.VueAdminTable({columns:e,container:this.adminTableId,deleteAction:"sprout-module-mailer/email-themes/delete",deleteConfirmationMessage:Craft.t("sprout-module-mailer","Are you sure you want to delete the Email Theme “{name}”?"),deleteSuccessMessage:Craft.t("sprout-module-mailer","Email theme deleted"),deleteFailMessage:Craft.t("sprout-module-mailer","Unable to delete email theme. Remove theme from all emails before deleting."),emptyMessage:Craft.t("sprout-module-mailer","No email themes exist yet."),minItems:1,padded:!0,reorderAction:"sprout-module-mailer/email-themes/reorder",reorderSuccessMessage:Craft.t("sprout-module-mailer","Email themes reordered."),reorderFailMessage:Craft.t("sprout-module-mailer","Couldn’t reorder themes."),tableData:this.tableData})}}window.EmailThemesSettings=a;
//# sourceMappingURL=emailThemes-4f0014f1.js.map