const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const { user_id } = request.params;

    const tags = await knex("tags")
      .select("tags.id", "tags.name", "tags.note_id", "notes.title as note_title")
      .join("notes", "tags.note_id", "notes.id")
      .where("tags.user_id", user_id);

    return response.json(tags);
  }
}

module.exports = TagsController;
