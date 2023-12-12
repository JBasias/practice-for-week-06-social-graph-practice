const { use } = require("chai");

// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.followers = {};
    this.currentID = 0;
  }

  addUser(name) {

    this.currentID++;

    let user = { "id": this.currentID, "name": name };

    this.users[this.currentID] = user;

    this.follows[this.currentID] = new Set();
    this.followers[this.currentID] = new Set();

    return this.currentID;

    // Your code here
  }

  getUser(userID) {

    if(!this.users[userID]) return null;

    return this.users[userID];

    // Your code here
  }

  follow(userID1, userID2) {

    if(!this.users[userID1]||!this.users[userID2]) return false;


    if(this.follows[userID1].has(userID2)) return false;

    if(!this.followers[userID2].has(userID1))
    {
      this.followers[userID2].add(userID1);
    }


    this.follows[userID1].add(userID2);
    return true;
    // Your code here
  }

  getFollows(userID) {

    return this.follows[userID];
    // Your code here
  }

  getFollowers(userID) {


    return this.followers[userID];
     // Your code here
  }

  getRecommendedFollows(userID, D)
  {

    let ret = []; let B = new Set(); let n;
    B.add(userID); let Q = [userID]; let cur;

    let d=0;

    n=Q.length;

    //D++;

    while(Q.length != 0 && D>=d)
    {
       n = Q.length;
       //cur = Q.shift();

       //D++;
       while(n!=0)
       {
         cur = Q.shift();

         for(const c of this.follows[cur])
         {
          if(!B.has(c))
          {
            //console.log(c);
            if(d>=1) ret.push(c);
            B.add(c);
            Q.push(c);
          }
         }
         n--;
       }
       d++;
    }

   // console.log(ret);

    return ret;


    // Your code here
  }
}

module.exports = SocialNetwork;
