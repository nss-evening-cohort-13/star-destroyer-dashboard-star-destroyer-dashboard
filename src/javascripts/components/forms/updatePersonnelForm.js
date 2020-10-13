import data from '../../helpers/data/personnelData';

const updatePersonnelForm = (personnelObj) => {
  $('#update-personnel-form').html(`
    <h2>Update Star Destroyer Personnel</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="p-name" value="${personnelObj.name}" placeholder="Example: Kylo Ren">
      </div>
      <div class="form-group"
        <label for="image">Image Url</label>
        <input type="text" class="form-control" value="${personnelObj.image}" id="p-image" placeholder="Enter image Url">
      </div>
      <button id="update-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Personnel</button>
    </form>`);

    
}