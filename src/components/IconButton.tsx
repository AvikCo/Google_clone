import '../styles/iconButton.css';

interface IconButtonProps {
	name: string;
	Icon: any;
  selectedTab: string;
	onTabClick: (name: string) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  selectedTab,
  name,
	Icon,
	onTabClick,
}) => {
  const borderColor = selectedTab === name ? '#508ef5' : 'white';

	return (
    <div style={{borderBottom: `4px solid ${borderColor}`} } onClick={() => onTabClick(name)} className='IconButton'>
			<Icon
				style={{ fontSize: 18, marginRight: '3.5px' }}
				className='IconButton__icon'
			/>
			{name}
		</div>
	);
};
export default IconButton;