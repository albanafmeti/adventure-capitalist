import repositories from '~/repositories';

export default (ctx, inject) => {
  const repos = repositories(ctx);
  inject('repos', repos)
}
