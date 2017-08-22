exports.home = function(req,res){
  res.render('index',{
    sitename:'I Love My City',
    title:'I Love My City',
    headline:'My Favotite Cities :)',
  });
}

exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading,sitename;
    var imageCount=4;
    

    if(cityName === 'chennai'){
       title="Chennai";
       heading ="Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church.";
    }
    else if(cityName === 'mumbai'){
       title ="Mumbai";
       heading="Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.";
    }
    else if(cityName === 'bengaluru'){
       title="Bengaluru";
       heading ="Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.";
    }
    else if(cityName === 'hyderabad'){
       title="Hyderabad";
       heading="Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.";
    }
    
    sitename = title +' | I Love My City';
    res.render('city',{
        sitename:sitename,
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
