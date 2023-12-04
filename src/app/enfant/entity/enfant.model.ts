export class EnfantItem {
  id: number;
  title: string;
  price: number;
  image: string;
  isLiked: boolean;
  constructor(id :number,title: string,price: number,image: string,isLiked: boolean){
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.isLiked = isLiked;
  }

}
