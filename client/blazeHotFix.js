if (module.hot) {
  let currentTemplate;
  let currentRegions;

  const oldRender = BlazeLayout.render;

  BlazeLayout.render = function (template, regions) {
    currentTemplate = template;
    currentRegions = regions;

    oldRender.call(this, template, regions);
  };

  const oldMigrateTemplate = Template._migrateTemplate;

  Template._migrateTemplate = function () {
    BlazeLayout.reset();
    oldMigrateTemplate.apply(this, arguments);
    BlazeLayout._render(currentTemplate, currentRegions);
  };
}
