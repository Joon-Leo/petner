import PNG_IMAGES from '../../../public/PNG-Image/image';
const mockImageURL = PNG_IMAGES.cat;

const MOCK_FREE_COMMUNITY_POST = {
  title: '커뮤니티 포스트 제목',
  imageURL: mockImageURL,
  content: '대충 재미있게 놀았다는 내용',
  author: 'kyleeJenner',
} as const;

export default MOCK_FREE_COMMUNITY_POST;
