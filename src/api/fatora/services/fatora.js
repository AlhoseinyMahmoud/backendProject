'use strict';

/**
 * fatora service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fatora.fatora');
