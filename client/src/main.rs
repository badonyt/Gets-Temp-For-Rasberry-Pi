use webpage::{Webpage, WebpageOptions};

fn main(){
   println!("Temperature of rasberry pi is {}",getbody_url("http://localhost:3000"))
}

fn getbody_url(wow: &str) -> String{
    let info = Webpage::from_url(wow, WebpageOptions::default())
    .expect("Could not read from URL");
    info.http.body
}