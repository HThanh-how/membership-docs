---
sidebar_position: 4
---

# Campaigns Zalo OA

## Table of contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Instructions](#step-by-step-instructions)
  - [1. Access Zalo OA Campaigns](#1-access-zalo-oa-campaigns)
  - [2. Create a New Campaign](#2-create-a-new-campaign)
  - [3. Select Target Members](#3-select-target-members)
  - [4. Schedule Campaign](#4-schedule-campaign)
  - [5. Monitor Campaign Performance](#5-monitor-campaign-performance)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

## Overview

The Campaigns Zalo OA feature allows you to create, schedule, and monitor messaging campaigns to members through the Zalo OA platform. You can target specific member segments, use templates, and track engagement.

## Prerequisites

Before you begin, ensure you have:
- Admin or Manager access rights
- Zalo OA account connected to the system
- Templates already created in Templates Zalo OA
- Clear campaign objectives and target audience

## Step-by-Step Instructions

### 1. Access Zalo OA Campaigns

1. Log in to the administration system
2. From the left menu, select **Membership Management > App Push > Campaigns Zalo OA**

<!-- ![Access Zalo Campaigns](./img/zalo-campaigns-access.png) -->

### 2. Create a New Campaign

1. Click the **"Create New Campaign"** button
2. Fill in the campaign details:
   - **Campaign Name**: Clear, descriptive name
   - **Description**: Campaign purpose and objectives
   - **Template**: Select a previously created template
   - **Campaign Type**: One-time, Recurring, or Triggered

3. If using a template with variables, specify default values
4. Click **"Next"** to continue

<!-- ![Create New Campaign](./img/create-zalo-campaign.png ) -->

### 3. Select Target Members

1. Define your target audience:
   - **All Members**: Send to all Zalo-connected members
   - **Filtered Selection**: Use filters to narrow audience
   - **Manual Selection**: Choose specific members from a list
   - **Imported List**: Upload a CSV file with member IDs

2. Apply filters if needed:
   - **Member Level**: Select specific levels
   - **Registration Date**: Filter by join date
   - **Birthday**: Target members with upcoming birthdays
   - **Purchase History**: Target based on buying behavior
   - **Point Balance**: Filter by available points

3. Preview estimated audience size
4. Click **"Next"** to continue

<!-- ![Select Target Members](./img/target-zalo-members.png) -->

### 4. Schedule Campaign

1. Choose when to send the campaign:
   - **Send Immediately**: Dispatch as soon as confirmed
   - **Schedule for Later**: Set specific date and time
   - **Recurring**: Set frequency pattern (daily, weekly, monthly)
   - **Triggered**: Based on member actions

2. For scheduled campaigns, set:
   - **Start Date and Time**: When to begin sending
   - **End Date** (optional): When campaign should stop
   - **Time Zone**: Specify sending time zone

3. Click **"Next"** to review

4. Review all campaign details
5. Click **"Launch Campaign"** to finalize

<!-- ![Schedule Campaign](./img/schedule-zalo-campaign.png) -->

### 5. Monitor Campaign Performance

1. From the Campaigns list, click on a campaign to view its performance
2. View key metrics:
   - **Delivery Rate**: Percentage of messages successfully sent
   - **Open Rate**: Percentage of recipients who opened the message
   - **Interaction Rate**: Clicks, replies, or actions taken
   - **Conversion Rate**: Completed desired actions (if tracked)

3. Export reports for detailed analysis

<!-- ![Monitor Campaign Performance](./img/monitor-zalo-campaign.png) -->

## Best Practices

- **Segment your audience** for more relevant messaging
- **Test campaigns** with a small group before mass sending
- **Schedule campaigns at optimal times** based on member activity patterns
- **Keep messages concise and actionable**
- **Include clear call-to-action** in every message
- **Monitor performance metrics** to improve future campaigns

## Troubleshooting

- **Campaign not sending**:
  - Check if schedule is set correctly
  - Verify Zalo OA connection status
  - Ensure target audience is not empty

- **Low delivery rates**:
  - Check if members have valid Zalo accounts
  - Verify OA account has sufficient permissions
  - Check if members have blocked messages

## FAQ

**Q**: How many members can I target in one campaign?
**A**: Zalo OA has daily sending limits based on your OA tier. The system will warn you if you exceed these limits.

**Q**: Can I cancel a scheduled campaign?
**A**: Yes, you can cancel any campaign that hasn't started sending yet. For campaigns in progress, you can pause them.

**Q**: How can I track if a campaign led to sales?
**A**: Use UTM parameters in links and integrate with your e-commerce platform to track conversions.

---
Last Updated: 2025-03-19