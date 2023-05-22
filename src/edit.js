import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-timeline',
    }) }>
			<InnerBlocks
        allowedBlocks={ [ 'create-block/uncommon-timeline-year' ] }
        template={ [
          [ 'create-block/uncommon-timeline-year', { year: '2018', title: 'Company is founded', description: 'Description' } ],
          [ 'create-block/uncommon-timeline-year', { year: '2019', title: 'Title', description: 'Description' } ],
          [ 'create-block/uncommon-timeline-year', { year: '2020', title: 'Title', description: 'Description' } ],
          [ 'create-block/uncommon-timeline-year', { year: '2021', title: 'Title', description: 'Description' } ],
          [ 'create-block/uncommon-timeline-year', { year: '2022', title: 'Title', description: 'Description' } ],
          [ 'create-block/uncommon-timeline-year', { year: '2023', title: 'Title', description: 'Description' } ]
        ]}
      />
		</div>
	);
}
