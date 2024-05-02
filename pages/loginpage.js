export class LoginPage {
    constructor(page) {
      this.page = page;
       this.url1="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fhomepage.html%3F_encoding%3DUTF8%26ref_%3Dnavm_em_signin%26action%3Dsign-out%26path%3D%252Fgp%252Fhomepage.html%253F_encoding%253DUTF8%2526ref_%253Dnavm_em_signin%26signIn%3D1%26useRedirectOnSuccess%3D1%26ref_%3Dnav_em_signout_0_1_1_39&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
      this.emailField=page.locator("//input[@class='a-input-text a-span12 auth-autofocus auth-required-field']");
      this.continueBtn=page.locator('.a-button-input');
      this.passwordField=page.locator('#ap_password');
      this.signInBtn=page.locator('#signInSubmit');
    }
    async navigateToSignIn() {
      await this.page.goto(this.url1, { waitUntil: 'domcontentloaded' }); // Wait until DOM content is loaded
  }
  async signIn() {
    // await this.page.fill("//input[@class='a-input-text a-span12 auth-autofocus auth-required-field']", "shirisha7143@gmail.com");
    await this.emailField.fill("shirisha7143@gmail.com");
    await this.continueBtn.click();
    await this.page.waitForTimeout(5000);
    await this.passwordField.fill("Shirisha@123");
    await this.signInBtn.click();
    await this.page.waitForTimeout(5000);
    console.log(this.page.url());
    const loginUrl= this.page.url();
  }
}