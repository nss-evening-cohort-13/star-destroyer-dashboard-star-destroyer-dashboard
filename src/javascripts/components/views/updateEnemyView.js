import enemyData from '../../helpers/data/enemyData';
import form from '../forms/updateEnemyForm';

const updateEnemyView = (enemyFirebaseKey) => {
  $('#app').html('<div id="update-enemy-form"></div>');
  enemyData.getSingleEnemy(enemyFirebaseKey).then((response) => {
    form.updateEnemyForm(response);
  });
};

export default { updateEnemyView };
