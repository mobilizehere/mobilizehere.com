import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import GalleryPage from './GalleryPage'
import Paginate from '../Paginate'

function Gallery({data, disableScroll, enableScroll, location, route}) {
	return (
		<div>
			<Helmet title={route.title} />
			<h2>Gallery</h2>
			<GalleryPage 
				{...Paginate(data, location)} 
				disableScroll={disableScroll} 
				enableScroll={enableScroll} 
			/>
		</div>
	);
}

const mapStateToProps = ({gallery}) => ({
	data: gallery
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)