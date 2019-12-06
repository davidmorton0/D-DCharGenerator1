function charAttribute(score){
  result = {extraSpells: []};
  result['modifier'] = (score > 0) ? Math.floor(score / 2) - 5 : 0;
  result['maximumSpellLevel'] = (score > 9) ? Math.min(score - 10, 9) : -1;
  let eS = score - 11;
  for (n = 1; n <= 9 && eS > 0; n++) {
    result['extraSpells'].push(Math.ceil(eS / 8));
    eS = score - (9 + 2 * (n + 1));
  }
  return result;
}

//Tests
var assert = require('assert');
assert.deepEqual(charAttribute(0), {modifier: 0, maximumSpellLevel: -1, extraSpells: []});
assert.deepEqual(charAttribute(1), {modifier: -5, maximumSpellLevel: -1, extraSpells: []});
assert.deepEqual(charAttribute(5), {modifier: -3, maximumSpellLevel: -1, extraSpells: []});
assert.deepEqual(charAttribute(10), {modifier: 0, maximumSpellLevel: 0, extraSpells: []});
assert.deepEqual(charAttribute(20), {modifier: +5, maximumSpellLevel: 9, extraSpells: [2,1,1,1,1]});
