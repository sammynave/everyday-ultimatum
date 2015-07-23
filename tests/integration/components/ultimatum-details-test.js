import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('ultimatum-details', 'Integration | Component | ultimatum details', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ultimatum-details}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#ultimatum-details}}
      template block text
    {{/ultimatum-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
