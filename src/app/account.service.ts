
 // <!-- ----------------------------- -------------------------------- -------------------------------- -->
  // <!-- ----------------------------- SERVICES ------------------------ -------------------------------- -->

export class AccountService {
     // These are the Accounts 
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

//   OnAccount Added
addAccount(name: string, status: string) {
    this.accounts.push( {name: name, status: status} )
}

UpdateStatus(id: number, status: string) {
    this.accounts[id].status = status;
}
}