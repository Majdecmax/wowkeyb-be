# wowkeyb-be

## Soft Delete Functionality

The keybindings model now supports soft delete functionality, which allows keybindings to be "deleted" without actually removing them from the database. This provides the ability to restore keybindings if needed.

### Features

- **Soft Delete**: Keybindings are marked as deleted with a `deleted_at` timestamp instead of being permanently removed
- **Automatic Filtering**: All queries automatically exclude soft-deleted keybindings unless explicitly requested
- **Restore Functionality**: Soft-deleted keybindings can be restored
- **Permanent Delete**: Option to permanently delete keybindings when needed
- **Migration Support**: Scripts to migrate existing data

### API Endpoints

#### Soft Delete a Keybinding
```
DELETE /api/keybindings/:keybinding_id
```
Marks a keybinding as deleted by setting `deleted_at` timestamp.

#### Restore a Soft-Deleted Keybinding
```
POST /api/keybindings/:keybinding_id/restore
```
Restores a soft-deleted keybinding by removing the `deleted_at` timestamp.

#### Permanently Delete a Keybinding
```
DELETE /api/keybindings/:keybinding_id/permanent
```
Permanently removes a keybinding from the database (cannot be restored).

#### Get Soft-Deleted Keybindings
```
GET /api/keybindings/deleted
```
Returns all soft-deleted keybindings for the authenticated user.

### Database Migration

To add the `deleted_at` field to existing keybindings, run the migration script:

```bash
# Development
npm run migrate-soft-delete:dev

# Staging
npm run migrate-soft-delete:staging

# Production
npm run migrate-soft-delete:prod
```

### Model Changes

The `Keybinding` model now includes:
- `deleted_at`: Date field that stores the deletion timestamp (null if not deleted)
- Pre-find middleware that automatically excludes soft-deleted documents from queries

### Usage Notes

- All existing API endpoints automatically exclude soft-deleted keybindings
- Only the owner of a keybinding can delete, restore, or permanently delete it
- Soft-deleted keybindings are not included in public listings or search results
- The `duplicateKeybinding` function only works with non-deleted keybindings
