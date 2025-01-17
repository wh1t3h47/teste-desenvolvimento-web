import {Router} from 'express';
import PokedexRoute from './Pokedex';
import RouteAbstract from '../declarations/abstracts/Route';
import RouteWithAllAbstract from '../declarations/abstracts/RouteWithAll';
import RouteWithAllPaginationAbstract
  from '../declarations/abstracts/RouteWithAllPagination';

/**
 * @fileoverview Esse arquivo contém as rotas do ponto de entrada do backend,
 * que vão ser consumidas pela classe App.
 * @see {@link module:packages/backend/express/App}
 * @module packages/backend/routes/index
 * @requires express
 * @version 0.0.4
 */

const mainRouter = (): Router => {
  /** Para atualizar rotas, apenas insira uma rota nessa Array */
  const routes: Array<
    RouteAbstract
    | RouteWithAllAbstract
    | RouteWithAllPaginationAbstract
  > = [
    PokedexRoute,
  ];

  const router = Router();
  routes.forEach((route) => {
    router.use(route.basePath, route.router, ...route.middlewares);
  });

  return router;
};

export default mainRouter;
