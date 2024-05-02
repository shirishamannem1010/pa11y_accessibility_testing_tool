
export class ProductsPage{
    constructor(page){
        this.page=page;

        this.location=page.locator('#nav-global-location-popover-link');

        this.search=page.locator('#twotabsearchtextbox');
        this.searchBar= page.locator('#nav-search-submit-button');
        this.mobileText= page.locator("(//span[@class='a-size-medium a-color-base a-text-normal'])[1]");
        this.addtocartBtn= page.locator("(//input[@name='submit.addToCart'])[1]");
        this.cartList= page.locator("//span[@class='nav-cart-icon nav-sprite']");
        this.perfume= page.locator("(//span[@class='a-size-base-plus a-color-base a-text-normal'])[2]");
        this.perfumeCart= page.locator("#add-to-cart-button");
        this.checkoutitems= page.locator("//input[@value='Proceed to checkout']");



    }

    async searchProducts(){
        // await this.page.waitForSelector('#twotabsearchtextbox');
        await this.search.fill("oppo mobiles");
        await this.searchBar.click();
        await this.page.waitForTimeout(3000);

    }
    async cartItems(){

        await this.mobileText.click();
        // await this.page.waitForTimeout(2000);

        await this.addtocartBtn.click();
        // await this.page.waitForTimeout(2000);

        await this.search.fill("perfume for females");
        await this.searchBar.click();
        await this.perfume.click();
        await this.page.waitForTimeout(2000);
        await this.perfumeCart.click();

        await this.cartList.click();
        await this.page.waitForTimeout(2000);
    }
    async buyproduct(){
        await this.checkoutitems.click();
        
    }
    
}