import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('logo-main', 'Integration | Component | logo main', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{logo-main}}`);

  assert.equal(this.$().text().trim().toLowerCase(), 
    "\"room renting has never been easier.\"".toLowerCase());

  // Template block usage:
  this.render(hbs`
    {{#logo-main}}
      template block text
    {{/logo-main}}
  `);

  // assert contains template block text
  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});
