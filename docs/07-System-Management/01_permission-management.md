---
sidebar_position: 1
---

# Permission Management

## Table of contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Instructions](#step-by-step-instructions)
  - [1. Access Permission Management](#1-access-permission-management)
  - [2. View User Roles](#2-view-user-roles)
  - [3. Create New Roles](#3-create-new-roles)
  - [4. Assign Permissions to Roles](#4-assign-permissions-to-roles)
  - [5. Manage User Access](#5-manage-user-access)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

## Overview

The Permission Management feature allows system administrators to control access rights within the membership management system. You can create roles, assign specific permissions, and manage which users have access to various features and data.

## Prerequisites

Before you begin, ensure you have:
- System Administrator access rights
- Understanding of organizational structure
- Knowledge of which staff members need what level of access
- Clear security policies for your organization

## Step-by-Step Instructions

### 1. Access Permission Management

1. Log in to the administration system
2. From the left menu, select **System Management > Permission Management**

<!-- ![Access Permission Management](./img/permission-management-access.png) -->

### 2. View User Roles

1. In the **"Roles"** tab:
   - View all existing roles in the system
   - See the number of users assigned to each role
   - Review role descriptions and permission sets

2. Click on a role to view:
   - Detailed permissions assigned to the role
   - List of users currently assigned to the role
   - Role creation and modification dates

<!-- ![View User Roles](./img/view-user-roles.png) -->

### 3. Create New Roles

1. Click the **"Create New Role"** button
2. Fill in the role details:
   - **Role Name**: Clear, descriptive name
   - **Description**: Purpose and scope of the role
   - **Base Role**: Option to copy permissions from an existing role

3. Click **"Create"** to establish the new role
4. Proceed to permission assignment

<!-- ![Create New Roles](./img/create-new-role.png) -->

### 4. Assign Permissions to Roles

1. In the role details view, navigate to the **"Permissions"** tab
2. Assign permissions by module:
   - **Membership Management**: Member data access and actions
   - **Communication Management**: Email and notification capabilities
   - **Promotion Management**: Campaign and coupon controls
   - **Analysis & Reporting**: Access to reports and data
   - **System Configuration**: System setting modifications

3. For each module, set permission levels:
   - **No Access**: Cannot view or access the feature
   - **View Only**: Can view but not modify
   - **Edit**: Can view and modify but not create/delete
   - **Full Access**: Complete control including create/delete

4. Set data access restrictions:
   - All members or specific segments
   - All campaigns or only assigned campaigns
   - Geographic restrictions
   - Date range limitations

5. Click **"Save Permissions"** to apply

<!-- ![Assign Permissions](./img/assign-permissions.png) -->

### 5. Manage User Access

1. Navigate to the **"Users"** tab
2. View all system users and their assigned roles
3. To assign a role to a user:
   - Find the user in the list
   - Click the **"Edit"** button
   - Select roles from the available options
   - Set an expiration date if temporary access is needed
   - Click **"Save"** to apply changes

4. To create a new user:
   - Click **"Add User"**
   - Enter user details (name, email, contact info)
   - Assign appropriate roles
   - Set initial password or send invitation
   - Click **"Create User"** to complete

<!-- ![Manage User Access](./img/manage-user-access.png) -->

## Best Practices

- **Follow principle of least privilege**: Grant only the permissions necessary for each role
- **Use role-based access control** rather than individual permissions
- **Regularly audit user roles and permissions** to ensure they remain appropriate
- **Create clear naming conventions** for roles that indicate function and access level
- **Document role definitions** including what each role should and should not access
- **Set expiration dates for temporary access** to ensure it's removed when no longer needed
- **Implement approval workflows** for sensitive permission changes
- **Maintain separation of duties** for critical functions

## Troubleshooting

- **User cannot access certain features**:
  - Verify their assigned role has the necessary permissions
  - Check if the feature requires additional access rights
  - Ensure the user's account is active and not expired

- **Unexpected access to sensitive information**:
  - Audit role permissions immediately
  - Check for unintended permission inheritance
  - Review recent permission changes

- **Permission changes not taking effect**:
  - Ask user to log out and log back in
  - Clear browser cache
  - Check for conflicting permissions across multiple roles

## FAQ

**Q**: Can a user have multiple roles?
**A**: Yes, users can be assigned multiple roles, and they will have the combined permissions of all assigned roles.

**Q**: What happens if permissions conflict between multiple roles?
**A**: Generally, the most permissive setting takes precedence. For example, if one role grants View access and another grants Edit access, the user will have Edit capabilities.

**Q**: How do I quickly set up permissions for a new department?
**A**: Create a base role template for the department, then create variations as needed. This ensures consistency while allowing for specialization.

---
Last Updated: 2025-03-19
---
# Permission Management (Admin Settings)

## Admin Settings

### Permission Management

#### Overview
The Permission Management feature allows you to control and configure access rights for different user roles within the system.

#### Key Functionalities
- Create and manage user roles
- Assign permissions to roles
- Set up access restrictions
- Manage user accounts
- Audit user activities
- Configure two-factor authentication

#### Best Practices
- Follow the principle of least privilege
- Regularly review user access rights
- Create role-based access controls
- Implement strong password policies
- Audit sensitive operations
- Train users on security practices

#### Troubleshooting
- If users can't access certain features, check their role permissions
- For authentication issues, verify user credentials and account status
- If changes to permissions aren't appearing, try clearing the cache

#### FAQ
**Q**: Can a user have multiple roles?
**A**: Yes, users can be assigned multiple roles to combine different permission sets.

**Q**: How often should permissions be reviewed?
**A**: It's recommended to review permissions quarterly or when there are significant staff changes.