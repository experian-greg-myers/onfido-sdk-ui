import Base from './BasePage.js'

class DocumentUploadConfirmation extends Base{

  get makeSureClearDetailsMessage() { return this.$('div#onfido-mount div.onfido-sdk-ui-Title-titleWrapper.onfido-sdk-ui-Title-smaller.onfido-sdk-ui-Confirm-title > div:nth-child(2)')}
  get redoBtn() { return this.$('div#onfido-mount button.onfido-sdk-ui-Confirm-retake.onfido-sdk-ui-Button-button.onfido-sdk-ui-Button-button-outline')}
  get confirmBtn() { return this.$('div#onfido-mount button.onfido-sdk-ui-Confirm-btn-primary.onfido-sdk-ui-Button-button.onfido-sdk-ui-Button-button-primary')}

  get waitForUploadToFinish() { return (async ()=>{
    const confirmBtn = await this.$('div#onfido-mount button.onfido-sdk-ui-Confirm-btn-primary.onfido-sdk-ui-Button-button.onfido-sdk-ui-Button-button-primary')
    await driver.wait(until.elementIsVisible(confirmBtn),2000);
  })}

  get upload() { return (async ()=>{
    const input = await this.$('.onfido-sdk-ui-CustomFileInput-input')
    await this.driver.executeScript(function(el) {
      el.setAttribute('style','display: block')
    },input)
    return input
  })()}

  copy = (lang="en") =>
    require(`../../../src/locales/${lang}.json`)
}

export default DocumentUploadConfirmation;