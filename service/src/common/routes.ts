import Config from '@src/common/config';

// RouteSet is just our big ol' pile of routes we're gonna process
interface RouteSet {
    Base: string;
    Routes: Record<string, RouteGroup>;
}

/**
 * RouteGroup is a collection of routes that all share a common base path, based on the object/resource in question
 */
interface RouteGroup {
    Base: string;
    Actions: Record<string, Route>;
}

// Route is a standard REST API route
interface Route {
    path: string;
    method: 'get' | 'post' | 'patch' | 'delete' | 'put' | 'head';
    // TODO define query/path params in type?
}

console.log('APIPath: ', Config.ApiPath)

// Why do this? Mostly for visualizing what the API is going to look like, prior to moving info into a swagger.
// Bit faster to hash things out this way.
// As the API grows the route definitions can be moved into their respective route folders
const RouteList:RouteSet = {
  Base: Config.ApiPath,
  Routes: {
    Debug: {
      Base: '/debug',
      Actions: {
        Ping: {
          path: '/ping',
          method: 'get',
        },
        Session: {
          path: '/session',
          method: 'get',
        }
      },
    },
    Notes: {
      Base: '/notes',
      Actions: {
        Get: {
          path: '/{id}',
          method: 'get',
        },
        List: {
          path: '/',
          method: 'get',
        },
        Create: {
          path: '/',
          method: 'post',
        },
        Delete: {
          path: '/{id}',
          method: 'delete',
        },
        Update: {
          path: '/{id}',
          method: 'patch',
        },
      },
    },
    Campaigns: {
      Base: '/campaigns',
      Actions: {
        Get: {
          path: '/{id}',
          method: 'get',
        },
        List: {
          path: '/',
          method: 'get',
        },
        Create: {
          path: '/',
          method: 'post',
        },
      },
    },
    Users: {
      Base: '/users',
      Actions: {
        Create: {
          path: '/',
          method: 'post',
        },
        Status: {
          path: '/',
          method: 'get'
        },
        Login: {
          path: '/login',
          method: 'post'
        },
        Logout: {
          path: '/logout',
          method: 'post'
        }
      }
    }
  },
};

export default RouteList;
