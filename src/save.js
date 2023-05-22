import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import scrollbarimage from '../assets/uncommon-scrollbar.png';

export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-timeline-wrapper',
    }) }>
    <div className='uncommon-timeline'>
			<InnerBlocks.Content />
    </div>
      <div className='uncommon-timeline-scrollbar'>
        <img className='scrollbar-empty' src={scrollbarimage} alt="scrollbar" />      
        <img className='scrollbar-full' src={scrollbarimage} alt="scrollbar" />      
      </div>
		</div>
	);
}
