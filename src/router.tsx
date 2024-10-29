import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Careers from '@pages/careers';
import Contact from '@pages/contact';
import Index from '@pages/index';
import News from '@pages/news';
import Policies from '@pages/policies';

const router = createBrowserRouter([{
  path: '/',
  children: [
  {
    "path": "/careers",
    "element": <Careers Location='Careers' Description={undefined} />,
    "index": false
  },
  {
    "path": "/contact",
    "element": <Contact Location='Contacting Us' Description={undefined} />,
    "index": false
  },
  {
    "path": "/",
    "element": <Index Location='Home' Description={undefined} />,
    "index": true
  },
  {
    "path": "/news",
    "element": <News Location='News' Description={undefined} />,
    "index": false
  },
  {
    "path": "/policies",
    "element": <Policies Location='Policies' Description={undefined} />,
    "index": false
  }
]
}]);

export default () => <RouterProvider router={router} />