import Profile from "./profile/profile";
import Statistics from "./statistics/statistics";
import  FriendList  from "./friendlist/friendList";
import TransactionHistory from "./history-tran/history-tran"

// import user from 'path/to/user.json';
// import data from '/path/to/data.json';
// import friends from 'path/to/friends.json';
// import transactions from 'path/to/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        key={data.id}
        title={data.title && 'Upload stats'}
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
