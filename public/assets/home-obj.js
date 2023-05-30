'use strict'
//const configF = require('../../config')
//let config
const homeObj = {
    //homeUrl: {}, 
    priceList:{
        acrylic:{
            'Acrylic Full Set'              : '$37+',
            'Acrylic Fill In'               : '$27+',
            'Acrylic Ombre Full Set'        : '$55+',
            'Acrylic Ombre Fill in'         : '$40+',
            'Gel Powder Full Set'           : '$45+',
            'Gel Powder Fill in'            : '$32+',
            'Pink & White Full Set'         : '$60+',
            'Pink & White Fill - In'        : '$50+',
            'Color Powder Full Set'          : '$47+',
            'Color Powder Fill in'           : '$37+',
            'Acrylic with Gel Polish Full Set' : '$47+',
            'Acrylic with Gel Polish Fill In' : '$37+'
        },
        sns:{
            'SNS on Real Nails (short nails)'             : '$40+',
            'SNS on Real Nails with Manicure' : '$50+',
            'SNS add-on Tips (Full Set)'               : '$50+',
            'SNS French'                    : '$45+',
            'SNS French Full Set'           : '$55+',
            'SNS Ombre'                     : '$55+',
            'SNS Full Set Ombre'            : '$60+'
        },
        gel_polish:{
            'Gel Polish w/Manicure (Without Take Off)'  : '$35+',
            'Gel Polish w/Maniicure (With Take Off)'    : '$40+',
            'Gel Polish w/Pedicure'                     : '$45',
            'Gel Polish French w/Manicure'              : '$40',
            'Gel Polish French w/Pedicure'              : '$50',
            'Gel Polish Change on Hands'                : '$22',
            'Gel Polish Change on Feet'                 : '$27',
            'Gel Polish Only'                           : '$22'
        },
        mani_pedi:{
            'Pedicure'                      : '$30',
            'Manicure'                      : '$22',
            'Pedicure & Manicure'           : '$45',
            '* Gel polish with pedicure extra' : '$15',
            '* Shape and Long nails will be extra' : '$10+'
        },
        kid_menu:{
            'Kid Manicure': '$15+',
            'Kid Pedicure (under 4 ft.)': '$22+',
            'Kid Pedicure (over 4 ft.)':'$28+',
            'Kid Pedicure & Manicure (under 4 ft.)': '$32+',
            'Kid Nail Art (under 4 ft.)': '$5+',
            'Nail Polish (under 4 ft.)':'$8+',
            'Toe Polish (under 4 ft.)':'$8+'
            
        },
        waxing:{
            'Eyebrows':'$11',
            'Lip':'$7',
            'Chin':'$8+',
            'Whole Face':'$38+',
            'Underarms':'$25+',
            'Half Arms':'$40+',
            'Half Legs':'$45+',
            'Neck':'$18+'            
        },
        eyelash:{
            'Individual Lash': '$35',
            'Eyelashes Whole Strip':'$20',
            'Eyelash Extension':'$140+',
            'Eyelashes Extension Fill':'$70+',
        },
        additional:{
            'Polish Change Hand Color'                  : '$10',
            'Polish Change Hand French of American'     : '$15',
            'Polish Change Toes Color'                  : '$12',
            'Polish Change Toes French American'        : '$17',
            'Nail Repair'                               : '$7+',
            'Nails Cut Down Acrylic'                    : '$5+',
            'Nails Soak Off Acrylic'                    : '$12',
            'Nail Art Design'                           : '$10+',
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
