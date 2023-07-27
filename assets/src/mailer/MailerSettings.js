class MailerSettings {

    constructor(id) {
        this.adminTableId = id;
        this.container = document.querySelector(this.adminTableId);
        this.tableData = JSON.parse(this.container.dataset.tableData);

        this.initVueAdminTable();
    }

    initVueAdminTable() {

        let columns = [
            {
                name: 'labelHtml',
                title: Craft.t('sprout-module-mailer', 'Name'),
                callback: function(value) {
                    return '<a class="cell-bold" href="' + value.url + '">' + value.name + '</a>';
                },
            },
            {
                name: 'mailerType',
                title: Craft.t('sprout-module-mailer', 'Mailer'),
            },
        ];

        new Craft.VueAdminTable({
            columns: columns,
            container: this.adminTableId,
            deleteAction: 'sprout-module-mailer/mailers/delete',
            deleteConfirmationMessage: Craft.t('sprout-module-mailer', 'Are you sure you want to delete the mailer “{name}”?'),
            deleteSuccessMessage: Craft.t('sprout-module-mailer', 'Mailer deleted'),
            deleteFailMessage: Craft.t('sprout-module-mailer', 'Unable to delete mailer.'),
            emptyMessage: Craft.t('sprout-module-mailer', 'No mailers exist yet.'),
            minItems: 2,
            padded: true,
            tableData: this.tableData,
        });
    }
}

window.MailerSettings = MailerSettings;



