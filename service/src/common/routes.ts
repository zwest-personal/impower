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
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'HEAD';
    // TODO define query/path params in type?
}

export default {
  Base: Config.ApiPath,
  Routes: {
    Debug: {
      Base: '/debug',
      Actions: {
        Ping: {
          path: '/ping',
          method: 'GET',
        },
      },
    },
    Notes: {
      Base: '/notes',
      Actions: {
        Get: {
          path: '/{id}',
          method: 'GET',
        },
        List: {
          path: '/',
          method: 'GET',
        },
        Create: {
          path: '/',
          method: 'POST',

        },
        Delete: {
          path: '/{id}',
          method: 'DELETE',
        },
        Update: {
          path: '/{id}',
          method: 'PATCH',
        },
      },
    },
    Campaigns: {
      Base: '/campaigns',
      Actions: {
        Get: {
          path: '/{id}',
          method: 'GET',
        },
        List: {
          path: '/',
          method: 'GET',
        },
        Create: {
          path: '/',
          method: 'POST',
        },
        Update: {
          path: '/{id}',
          method: 'PATCH',
        },

      },
    },
    Users: {
      Base: '/users',
      Actions: {
        Status: {
          path: '/',
          method: 'GET'
        },
        Login: {
          path: '/login',
          method: 'POST'
        },
        Logout: {
          path: '/logout',
          method: 'POST'
        }
      }
    }
  },
};
