
import AWS from "./aws.js";
import Logger from "../utils/logger.js";

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

import { USER_EMAIL_TEMPLATES, USER_EMAIL_TEMPLATE_NAMES, USER_EMAIL_TEMPLATE_SUBJECTS } from "../controllers/email/emails/user.js";

// ses.deleteTemplate({ TemplateName: 'resetPasswordConfirm' }, (err, data) => {
//   if (err) {
//     console.error("Error deleting template:", err);
//   } else {
//     console.log("Template deleted successfully:", data);
//   }
// });

await Promise.all(Object.keys(USER_EMAIL_TEMPLATE_NAMES).map(async template => {

  const params = {
    TemplateName: template
  };

  try {
    await ses.getTemplate(params).promise();
  } catch (err) {
    Logger.error(`Error retrieving template: ${err}`);

    let templateParams = {
      Template: {
        TemplateName: template,
        HtmlPart: USER_EMAIL_TEMPLATES[template],
        SubjectPart: USER_EMAIL_TEMPLATE_SUBJECTS[template]
      }
    };
    try {
      const data = await ses.createTemplate(templateParams).promise();
      Logger.info(`Created template: ${data}`);
    } catch (err) {
      Logger.error(`Error creating template: ${err}`);
    }
  }

}));

export default ses;
