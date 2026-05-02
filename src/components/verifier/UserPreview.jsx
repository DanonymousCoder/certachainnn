import ProfileHeader from '../profile/ProfileHeader';

const UserPreview = () => {
  return (
    <ProfileHeader
      profile={{
        name: 'Verified student',
        summary: 'Live verification data will populate this preview once a backend lookup succeeds.',
        primaryCourse: 'Awaiting credential data',
        walletAddress: ''
      }}
    />
  );
};

export default UserPreview;
