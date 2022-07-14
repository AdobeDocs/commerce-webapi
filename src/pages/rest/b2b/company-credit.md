---
title: Integrate with the CompanyCredit module
description: Set up the CompanyCredit module, which allows companies to make purchases on credit.
edition: ee
---

import * as Vars from '../../../data/vars.js';

# Integrate with the CompanyCredit module

Company credit allows company members to purchase items on credit. This is a feature specific to <Vars.sitedatavarb2b/> that is used only for transactions between companies. The seller allocates an amount (or the credit limit) to a company and then company members can purchase items using this amount with the Payment on Account method. The credit amount used by a company is sent to the seller offline. Then the seller creates a Reimburse transaction in the system to adjust the company balance.

The following diagram illustrates the process flow of orders using the Payment on Account method.

![Payment on credit](/../../_images/payment-on-credit.png)
