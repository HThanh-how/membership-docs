---
sidebar_position: 1
---

# Coupon & Voucher Management

## Table of contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Instructions](#step-by-step-instructions)
  - [1. Access Coupon Management](#1-access-coupon-management)
  - [2. Create New Coupons](#2-create-new-coupons)
  - [3. Manage Coupon Distribution](#3-manage-coupon-distribution)
  - [4. Track Usage and Performance](#4-track-usage-and-performance)
  - [5. Manage Vouchers](#5-manage-vouchers)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

## Overview

The Coupon & Voucher Management feature allows you to create, distribute, and track promotional coupons and vouchers. This system helps you manage discount codes, gift certificates, and special offer vouchers for your membership program.

## Prerequisites

Before you begin, ensure you have:
- Marketing Manager or Admin access rights
- Promotion strategy and budget approved
- Clear objectives for each coupon type
- Distribution channels identified

## Step-by-Step Instructions

### 1. Access Coupon Management

1. Log in to the administration system
2. From the left menu, select **Promotion Management > Coupon & Voucher Management > Create Coupon**

<!-- ![Access Coupon Management](./img/coupon-management-access.png) -->

### 2. Create New Coupons

1. Click the **"Create New Coupon"** button
2. Select the coupon type:
   - **Percentage Discount**: e.g., 15% off total order
   - **Fixed Amount**: e.g., $10 off purchase
   - **Free Shipping**: Waives shipping costs
   - **Buy X Get Y**: e.g., Buy one, get one free
   - **Gift Certificate**: Monetary value voucher

3. Configure coupon details:
   - **Coupon Name**: Internal name for tracking
   - **Coupon Code**: Code customers will enter (or generate pattern for bulk)
   - **Discount Value**: Amount or percentage
   - **Minimum Purchase**: Required spend amount
   - **Start Date/Time**: When redemption becomes active
   - **Expiration Date/Time**: When coupon expires
   - **Usage Limit**: Total and per-customer limits

4. Set eligibility rules:
   - **Product Restrictions**: Specific items or categories
   - **Excluded Products**: Items not eligible
   - **Member Level Restrictions**: Available only to certain tiers
   - **New/Existing Customers**: Target specific customer types
   - **Combinable**: Whether it works with other promotions

5. Click **"Save"** or **"Generate Coupons"** for bulk creation

<!-- ![Create New Coupons](./img/create-new-coupons.png) -->

### 3. Manage Coupon Distribution

1. From the coupon list, select the coupon(s) to distribute
2. Click **"Distribute"** and choose distribution method:
   - **Email**: Send directly to member emails
   - **Export**: Generate CSV for external use
   - **Print**: Create printable versions
   - **API**: Make available via integration

3. For email distribution:
   - Select recipient segments
   - Choose email template
   - Schedule sending time
   - Set reminder parameters

4. For export/API:
   - Select export format
   - Configure data fields
   - Set security parameters

5. Set tracking parameters:
   - UTM codes for digital distribution
   - Source tracking for redemption analysis

<!-- ![Manage Coupon Distribution](./img/coupon-distribution.png) -->

### 4. Track Usage and Performance

1. Navigate to **Coupon & Voucher Management > Usage History**
2. View comprehensive usage statistics:
   - **Issued Count**: Total coupons distributed
   - **Redemption Count**: Total times used
   - **Redemption Rate**: Percentage of coupons used
   - **Average Order Value**: For orders using coupons
   - **Total Discount Amount**: Value of discounts given
   - **Revenue Generated**: Sales from coupon use

3. Filter data by:
   - Date range
   - Coupon type
   - Distribution channel
   - Member segment

4. View individual redemption details:
   - Who used each coupon
   - When it was used
   - Purchase amount
   - Items purchased

5. Export reports for further analysis

<!-- ![Track Coupon Performance](./img/coupon-performance.png) -->

### 5. Manage Vouchers

1. Navigate to **Coupon & Voucher Management > Voucher Management**
2. Create vouchers:
   - **Gift Cards**: Prepaid value cards
   - **Experience Vouchers**: Special service vouchers
   - **Reward Vouchers**: Point redemption items

3. Configure voucher parameters:
   - Value or service offered
   - Validity period
   - Redemption process
   - Balance tracking (for gift cards)

4. Manage voucher lifecycle:
   - Issue new vouchers
   - Check voucher balances
   - Void or replace vouchers
   - Extend expiration dates

<!-- ![Manage Vouchers](./img/manage-vouchers.png) -->

## Best Practices

- **Use unique, easy-to-remember codes** for manual entry
- **Set appropriate usage limits** to protect profit margins
- **Create expiration dates** to drive timely action
- **Track redemption sources** to measure channel effectiveness
- **Regularly audit active coupons** to remove outdated offers
- **Use consistent naming conventions** for better tracking
- **Test coupons before distribution** to ensure they work correctly

## Troubleshooting

- **Coupon not applying correctly**:
  - Verify eligibility criteria is met (minimum purchase, product restrictions)
  - Check expiration date and activation date
  - Confirm usage limits haven't been reached
  - Ensure no conflicts with other promotions

- **Distribution issues**:
  - Check email deliverability for bounces
  - Verify coupon code format is correct
  - Ensure distribution list is up-to-date

## FAQ

**Q**: Can members stack multiple coupons in one purchase?
**A**: This depends on your configuration. You can set each coupon to be combinable or non-combinable with other promotions.

**Q**: What happens when a coupon expires?
**A**: Expired coupons cannot be redeemed. You can choose to send notifications before expiration or extend dates for valuable customers.

**Q**: How can I prevent coupon abuse or sharing?
**A**: Use unique single-use codes, implement member-specific restrictions, set appropriate usage limits, and track redemption patterns for unusual activity.

---
Last Updated: 2025-03-19