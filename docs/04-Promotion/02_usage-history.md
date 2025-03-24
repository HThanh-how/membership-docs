---
sidebar_position: 2
---

# Usage History

## Table of contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Instructions](#step-by-step-instructions)
  - [1. Access Usage History](#1-access-usage-history)
  - [2. View Coupon Usage Records](#2-view-coupon-usage-records)
  - [3. Filter and Search Records](#3-filter-and-search-records)
  - [4. Analyze Usage Patterns](#4-analyze-usage-patterns)
  - [5. Export Usage Data](#5-export-usage-data)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

## Overview

The Usage History feature allows you to track and monitor the redemption of coupons and vouchers in your system. This information helps you understand which promotions are most effective, identify usage patterns, and detect potential abuse.

## Prerequisites

Before you begin, ensure you have:
- Marketing Manager or Admin access rights
- Active or past coupons and vouchers in the system
- Understanding of your coupon structure and naming conventions
- Basic knowledge of your redemption rules

## Step-by-Step Instructions

### 1. Access Usage History

1. Log in to the administration system
2. From the left menu, select **Promotion Management > Coupon & Voucher > Usage History**

<!-- ![Access Usage History](./img/usage-history-access.png) -->

### 2. View Coupon Usage Records

1. On the main screen, you'll see a table of all coupon/voucher usage records:
   - **Coupon Code**: The code that was redeemed
   - **Order ID**: Associated order number
   - **Date/Time**: When the redemption occurred
   - **Member**: Who used the coupon
   - **Discount Amount**: Value of discount applied
   - **Order Total**: Total order value after discount
   - **Status**: Completed, Refunded, Cancelled, etc.

2. Click on any record to view detailed information:
   - Complete order details
   - Customer information
   - Products purchased
   - Other promotions applied
   - Coupon rules and restrictions

<!-- ![View Usage Records](./img/view-coupon-usage.png) -->

### 3. Filter and Search Records

1. Use the filter panel to narrow down records:
   - **Date Range**: Select specific time periods
   - **Coupon Type**: Filter by promotion type
   - **Coupon Code**: Search for specific codes
   - **Status**: Filter by redemption status
   - **Order Value**: Filter by order total range
   - **Member Level**: Filter by membership tier
   - **Member ID/Email**: Search for specific member usage

2. Use the search bar for quick queries across all fields

3. Save commonly used filters for future reference

<!-- ![Filter and Search Records](./img/filter-usage-history.png) -->

### 4. Analyze Usage Patterns

1. Navigate to the **"Usage Analytics"** tab
2. View usage trends and patterns:
   - **Redemption Timeline**: Usage over time
   - **Top Coupons**: Most frequently used codes
   - **Member Segments**: Usage by member level
   - **Value Analysis**: Discount amounts and order totals
   - **Channel Analysis**: Where coupons are being redeemed

3. Identify important patterns:
   - Peak redemption periods
   - Member preferences
   - High-value vs. high-volume coupons
   - Potential misuse patterns

<!-- ![Analyze Usage Patterns](./img/analyze-usage-patterns.png) -->

### 5. Export Usage Data

1. Click the **"Export"** button
2. Configure export parameters:
   - Select date range
   - Choose records to include (apply current filters)
   - Select fields to export
   - Choose grouping and sorting options

3. Select export format:
   - Excel spreadsheet
   - CSV file
   - PDF report

4. Click **"Generate Export"** to download

<!-- ![Export Usage Data](./img/export-usage-data.png) -->

## Best Practices

- **Review usage history regularly** to identify trends and patterns
- **Check for unusual redemption patterns** that might indicate misuse
- **Compare coupon performance** across different member segments
- **Monitor high-value coupon usage** closely
- **Look for correlations** between coupon usage and member retention
- **Track first-time vs. repeat coupon users** to understand promotional effectiveness
- **Analyze order values with and without coupons** to assess true impact

## Troubleshooting

- **Missing redemption records**:
  - Verify integration between coupon system and order processing
  - Check for system updates or outages during the period
  - Ensure all sales channels are properly reporting

- **Duplicate redemption entries**:
  - Check for order modifications that might trigger multiple entries
  - Verify coupon settings for single-use restrictions
  - Look for failed/retried transaction patterns

- **Inconsistent discount amounts**:
  - Verify coupon rules and restrictions
  - Check for stacked promotions affecting total discount
  - Review order adjustments or partial refunds

## FAQ

**Q**: How long are coupon usage records kept in the system?
**A**: The system retains complete usage history for 24 months. After that, detailed records are archived but summary data remains available for reporting.

**Q**: Can I tell if a coupon was shared or used by someone other than the intended recipient?
**A**: Look for patterns such as multiple redemptions from different accounts in quick succession, redemptions from unexpected geographic locations, or usage patterns that don't match the member's typical behavior.

**Q**: How can I identify our most valuable coupon types?
**A**: Look beyond redemption rates to metrics like average order value, margin after discount, new customer acquisition cost, and subsequent purchase behavior from coupon users.

---
Last Updated: 2025-03-19