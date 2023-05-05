import Profile from './Profile/Profile';
import user from '../json-files/user';
import Statistics from './Statistics/Statistics';
import data from '../json-files/data';
import FriendList from './FriendList/FriendList';
import friends from '../json-files/friends';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../json-files/transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

    <Profile 
      name={user.username} 
      tag={user.tag} 
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />

    <Statistics
      title="Upload stats" 
      stats={data}
    />

    <FriendList
    friends={friends}
    />

    <TransactionHistory
    items={transactions} 
    />
    </div>
  );
};
