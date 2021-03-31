import { searchData as ContextDataInterface } from '../contexts/SearchDataContext';
import ReactHtmlParser from 'react-html-parser';
import '../styles/resultCard.css';


interface ResultCardProps {
	content: ContextDataInterface;
	index: number;
}
const ResutCard: React.FC<ResultCardProps> = ({ content, index }) => {

	// const linkToShow =
	// 	'https://' + content.link.slice(8).replaceAll('/', ' > ').substring(0,80);

	return (
		<div className='resultCard'>
			<div
				onClick={() => window.open(content.link, '_self')}
				className='resultCard__body'
			>
				<p>{content.link}</p>
				<h3>{content.title}</h3>
			</div>
			<p>{ReactHtmlParser(content.htmlSnippet)}</p>
		</div>
	);
};

export default ResutCard;
