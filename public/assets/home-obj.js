'use strict'
//const configF = require('../../config')
//let config
const homeObj = {
    //homeUrl: {}, 
    priceList:{
        acrylic:{
            'Acrylic Full Set'              : '$30+',
            'Acrylic Fill In'               : '$22+',
            'Acrylic Ombre Full Set'        : '$45+',
            'Acrylic Ombre Fill in'         : '$32+',
            'Gel Powder Full Set'           : '$40+',
            'Gel Powder Fill in'            : '$28+',
            'Pink & White Full Set'         : '$50+',
            'Pink & White Fill - In'        : '$40+',
            'Pink Powder Full Set'          : '$40+',
            'Pink Powder Fill in'           : '$32+',
            'Acrylic with Gel Polish Full Set' : '$40+',
            'Acrylic with Gel Polish Fill In' : '$32+'
        },
        sns:{
            'SNS on Real Nails'             : '$32+',
            'SNS add-on Tips'               : '$40+',
            'SNS French'                    : '$38+',
            'SNS French Full Set'           : '$45+',
            'SNS Ombre'                     : '$50+',
            'SNS Full Set Ombre'            : '$55+'
        },
        gel_polish:{
            'Gel Polish w/Manicure (Without Take Off)'  : '$30+',
            'Gel Polish w/Maniicure (With Take Off)'    : '$35+',
            'Gel Polish w/Pedicure'                     : '$40',
            'Gel Polish French w/Manicure'              : '$35',
            'Gel Polish French w/Pedicure'              : '$45',
            'Gel Polish Change on Hands'                : '$22',
            'Gel Polish Change on Feet'                 : '$27',
            'Gel Polish Only'                           : '$22'
        },
        mani_pedi:{
            'Pedicure'                      : '$25',
            'Manicure'                      : '$20',
            'Pedicure & Manicure'           : '$40'
        },
        spa_pedi:{
            '1. Regular Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, finish with soothing and massage noisturizing lotion, and polish.' : '$23',
    
            'Combo Classic' : '$36',
            '2. Classic Deluxe Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening lemon sugar scrub, hot towel. Finish with moisturizing with lotion massage and polish.': '$28',
            
            'Combo Deluxe': '$45',
            '3. Classic Deluxe Plus Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening lemon sugar scrub + Foot Mask, hot towel. Finish with moisturizing with lotion massage and polish.': '$32',
            
            'Combo Deluxe Plus' : '$52',
            '4. Deluxe OPI Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening OPI sugar scrub + Foot mask, hot towel. Finish with moisturizing with OPI lotion massage and polish.': '$34',
            
            'Combo Duluxe OPI': '$58',
            '5. Deluxe OPI Pedicure w/Paraffin: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening OPI sugar scrub + Foot mask + Paraffin wax, hot towel. Finish with moisturizing with OPI lotion massage and polish.': '$40',
            
            'Combo Deluxe OPI W/Paraffin Wax': '$65',
            '6. Luxury OPI Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening OPI sugar scrub + Foot Mask + Paraffin wax, hot towel, hot stone massage to releaseiles and muscle and massage OPI lotion and polish.': '$50',
            
            'Combo Luxury OPI':'$75',
            '7. Lush Nail Special Nature: Sea salt soak, mud masque, massage cream, sugar scrub, hot towel': '$40+',
            
            '8. VIP Luxury Nature: Sea salt soak, sugar scrub, hot towel, masque massage cream, paraffin wax, hot stone, massage.': '$50+'
        },
        children:{
            '10 Year old and under':'',
            'Kid Manicure': '$12+',
            'Kid Pedicure (under 4 ft.)': '$20+',
            'Kid Pedicure (over 4 ft.)':'$25+',
            'Kid Manicure & Pedicure (under 4 ft.)': '$30+',
            'Kid Nail Art (under 4 ft.)': '$5+',
            'Nail Polish (under 4 ft.)':'$8+',
            'Toe Polish (under 4 ft.)':'$8+'
            
        },
        waxing:{
            'Eyebrows':'$10',
            'Lip':'$6',
            'Chin':'$8+',
            'Whole Face':'$35+',
            'Underarms':'$22+',
            'Half Arms':'$37+',
            'Half Legs':'$44+',            
        },
        eyelash:{
            'Individual Lash': '$28',
            'Eyelashes Whole Strip':'$18',
            'Eyelash Extensions':'$120+',
            'Eyelashes Fill':'$50+',
        },
        additional:{
            'Polish Change Hand Color'                  : '$10',
            'Polish Change Hand French of American'     : '$15',
            'Polish Change Toes Color'                  : '$12',
            'Polish Change Toes French American'        : '$18',
            'Nail Repair'                               : '$7+',
            'Nails Cut Down Acrylic'                    : '$3+',
            'Nails Soak Off Acrylic'                    : '$12',
            'Nail Art Design'                           : '$7+',
            'Paraffin Wax Hand'                         : '$10',
            'Paraffin Wax Leg'                          : '$12',
            'Take Off Gel Polish or SNS'                : '$12',
            '2 Acrylic on Toes'                         : '$12',
            'Chrome Additional'                         : '$25'
        }
    }
    
}

// module.exports = async function(){
//     config = await configF()
//     homeObj.homeUrl = config.homeUrl
//     return homeObj
// }
module.exports= homeObj
