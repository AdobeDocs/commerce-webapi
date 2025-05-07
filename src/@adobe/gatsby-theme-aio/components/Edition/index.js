/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@spectrum-css/badge';
import '@spectrum-css/link';
import '@spectrum-css/tooltip';

let editionText = '';
let editionColor = '';
let editionTooltip = '';
const EDITIONS_LINK = 'https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions';

const Edition = ({ ...props }) => {
  switch (props.name) {
    case 'paas':
      editionText = 'PaaS only';
      editionColor = 'spectrum-Badge--informative';
      editionTooltip = 'Applies to Adobe Commerce on Cloud (Adobe-managed PaaS infrastructure) and on-premises projects only.';
      break;
    case 'saas':
      editionText = 'SaaS only';
      editionColor = 'spectrum-Badge--positive';
      editionTooltip = 'Applies to Adobe Commerce as a Cloud Service and Adobe Commerce Optimizer projects (Adobe-managed SaaS infrastructure).';
      break;
    default:
      editionText = 'Create an Edition tag';
      editionColor = 'spectrum-Badge--yellow';
      editionTooltip = '';
  }

  return (
    <a 
      href={EDITIONS_LINK}
      className="spectrum-Link"
      target="_blank"
      rel="noreferrer"
      style={{ 
        textDecoration: 'none',
        display: 'inline-block',
        marginTop: '1rem',
        marginRight: '0.5rem',
        position: 'relative'
      }}
      title={editionTooltip}
    >
      <span 
        className={`spectrum-Badge spectrum-Badge--sizeS ${editionColor}`} 
        style={{ paddingBottom: '4px', cursor: 'pointer' }}
      >
        {editionText}
      </span>
    </a>
  );
};

Edition.propTypes = {
  name: PropTypes.string
};

export { Edition };
