import Profile from "./profile/profile";
import Statistics from "./statistics/Statistics";
import  FriendList  from "./friendlist/FriendList";
import TransactionHistory from "./history-tran/History-tran"

import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={data.title} stats={data} />

      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions} /> 
    </div>
  );
};
