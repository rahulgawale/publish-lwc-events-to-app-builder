public with sharing class AccountListController {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        return [SELECT Name, Type FROM Account];
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(Id accountId){
        return [SELECT Name, Email, Phone FROM Contact WHERE AccountId = :accountId];
    }
}