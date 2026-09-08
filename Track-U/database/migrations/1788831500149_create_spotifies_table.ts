import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'spotify_accounts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable()
        .unique()

      table.string('spotify_id').notNullable().unique()
      table.string('user_name').notNullable()
      table.string('user_link').notNullable()
      table.string('user_pfp').nullable()
      table.string('access_token').notNullable()
      table.string('refresh_token').notNullable()
      table.timestamp('expires_at').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}