import CMS from 'netlify-cms';
import isEpisodeConfig from './widgets/IsEpisode/IsEpisode.js';
import UniqueID from './widgets/UniqueID/UniqueID.js';
import listConfig from './widgets/List/List.js';
import PodcastPreview from './widgets/PodcastPreview/PodcastPreview.js';
import mainStyles from '!css-loader!sass-loader!../css/index.scss';
import playerStyles from '!css-loader!sass-loader!../css/lz-player.scss';
import podcastPreviewStyles from '!css-loader!sass-loader!../css/podcast-detail-page.scss';

CMS.registerWidget(...isEpisodeConfig);
CMS.registerWidget(...listConfig);
CMS.registerWidget(...UniqueID);
CMS.registerPreviewStyle(`${mainStyles.toString()} ${playerStyles.toString()} ${podcastPreviewStyles.toString()}`, { raw: true });
CMS.registerPreviewTemplate('podcast', PodcastPreview);