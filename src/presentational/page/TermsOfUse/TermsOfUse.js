import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const TermsOfUse = () => {
  return(
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Sportunity Terms of Use</Text>

      <Text style={styles.subtitle}>
        Last update on the: 05.03.2017
      </Text>
      <Text style={styles.text}>
        These Terms of Use (“Terms”) apply to your access to and use of the website, mobile applicatiosn and other online products and services (collectively, our “Services”) provided by Sportunity, a Swiss company with its principal place of business in Lausanne, Switzerland. (“Sportunity,” “we,” “us” or “our”). By accessing or using our Services, you agree to these Terms. If you do not agree to these Terms, do not access or use our Services.
      </Text>
      <Text style={styles.text}>
        These Terms do not alter in any way the terms or conditions of any other agreement you may have with Sportunity for products, services or otherwise. If you are accessing or using our Services on behalf of another person or entity, you represent and warrant that you are authorized to accept these Terms on such person or entity's behalf, and that such person or entity will be responsible to Sportunity if you violate these Terms.
        If you have any question regarding the use of our Services, please contact us.
      </Text>

      <Text style={styles.subtitle}>
        1. Eligibility, Registration and Account
      </Text>
      <Text style={styles.text}>
        By using our Services, you represent and warrant that you (a) are 18 years of age or older, (b) have not been previously suspended or removed from our Services, or engaged in any activity that could result in suspension or removal from our Services, (c) will not offer create sport activities or any other services from more than one Sportunity account without our express permission, and (d) have full power and authority to enter into these Terms and in so doing will not violate any other agreement to which you are a party.
      </Text>
      <Text style={styles.text}>
        In order to access or use certain areas and features of our Services, you may need to register for an account. By registering for an account, you agree to (i) provide accurate, truthful, current and complete account information; (ii) maintain and promptly update your account information to maintain its accuracy and completeness; (iii) maintain the security of your account by not sharing your password with others and restricting access to your account, computer and device; (iv) promptly notify Sportunity if you discover or otherwise suspect any security breaches related to our Services or your account; and (v) take responsibility for all activities that occur under your account and accept all risks of unauthorized access.
      </Text>

      <Text style={styles.subtitle}>
        2. Communications Preferences
      </Text>
      <Text style={styles.text}>
        By creating a Sportunity account, you consent to receive electronic communications from Sportunity (e.g., via email or by posting notices on our Services). These communications may include notices about your account (e.g., payment authorizations, password changes and other transactional information) and are part of your relationship with us. You agree that any notices, agreements, disclosures or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing. You should maintain copies of electronic communications from us by printing a paper copy or saving an electronic copy. We may also send you promotional communications via email, including, but not limited to, newsletters, special offers, surveys and other news and information we think will be of interest to you. You may opt out of receiving these promotional emails at any time by following the unsubscribe instructions provided in these communications.
      </Text>

      <Text style={styles.subtitle}>
        3. Our Services Offers
      </Text>

      <Text style={styles.text}>
        Our Services offers tools, human resources and venues to connect people who wants to attends sport activities together.
        We will differentiate several types of user according to the usage of our services. A user can be one or several types of users according to his usage of our services.
        A user can be one or several types of users:
      </Text>
      <Text style={styles.text}>
        - A person, business soletrader or association who/which create a sport event is named main organizer.
      </Text>
      <Text style={styles.text}>
        - A person, business soletrader or association who/which assist the main organizer is named a secondary organizer
      </Text>
      <Text style={styles.text}>
        - A person, who attends a sport event will be named participant.
      </Text>
      <Text style={styles.text}>
        - A person, business soletrader or association who/which rent a sport facility is named a venue.
      </Text>
      <Text style={styles.text}>
        - A person, business soletrader or association who/which create a sport event is named main organizer.
      </Text>
      <Text style={styles.text}>
        Sportunity: (a) does not employ, recommend or endorse any users and has no control over the acts or omissions of any users; (b) is not responsible or liable in any manner for the performance or conduct of any users or other third parties online or offline; (c) makes no representations or warranties about the quality of the services provided by any user or about your interactions or dealings with other users except as expressly stated on our Services; and (d) does not screen users or conduct any kind of identity or background checks except as otherwise expressly stated in these Terms or on or in our Services. Regardless of whether Sportunity screens users or performs a background check, you should exercise caution and perform your own screening before connecting or meeting with any other user through our Services, entering into a contract or agreement with any other user or obtaining any services. Sportunity hereby expressly disclaims, and you hereby expressly release Sportunity from, any and all liability whatsoever for any controversies, claims, suits, injuries, loss, harm or damages arising from or related to our Services or your interactions or dealings with other users, including any acts or omissions of users online or offline. All use of our Services is at your sole and exclusive risk.
      </Text>

      <Text style={styles.subtitle}>
        4. User Transactions; Release
      </Text>
      <Text style={styles.text}>
        Our Services may be used to: (a)help obtain and/or offer charged and free sport services; (b) simply make sport activities and, optional share the cost with other participants; (c) facilitate payment for previously mentioned services. However, users transact and agree solely between themselves and Sportunity is not a party to any transactions and agreement between users. Sportunity hereby expressly disclaims, and you hereby expressly release Sportunity from, any and all liability whatsoever for any controversies, claims, suits, injuries, loss, harm or damages arising from or related to disputes, dealings, or interactions between you and any other users or third parties.
      </Text>
      <Text style={styles.text}>
        If you offer charged sport services, the first and all future bookings with Sportunity users must be booked via our Services. Failure to abide by this policy may result in suspension from our Services.
      </Text>

      <Text style={styles.subtitle}>
        5. Payment Terms
      </Text>
      <Text style={styles.subSubtitle}>
        5.1 Payment and Billing Information
      </Text>
      <Text style={styles.text}>
        By providing a credit card or other payment method that we accept, you represent and warrant that you are authorized to use the designated payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total amount of your purchase (including any applicable taxes and other charges) (collectively, as applicable, an “Order”). If the payment method cannot be verified, is invalid or is otherwise not acceptable, your Order may be suspended or cancelled. You must resolve any problem we encounter in order to proceed with your Order. In the event you want to change or update payment information associated with your Sportunity account, you can do so at any time by logging into your account and editing your payment information.
      </Text>
      <Text style={styles.subSubtitle}>
        5.2 Returns and Refunds
      </Text>
      <Text style={styles.text}>
        A booked sportunity will be refund only if we find another participant willing to pay the price to take your place in the sport event.
      </Text>
      <Text style={styles.subSubtitle}>
        5.3 Usage of subcontractor for payment method
      </Text>
      <Text style={styles.text}>
        Sportunity use a third party which is allows to manage payment. Therefore, term of usage for payment are as followed:
      </Text>

      <Text style={styles.subtitle}>
        6. Copyright and Limited License
      </Text>
      <Text style={styles.text}>
        Unless otherwise indicated in writing by us, our Services and all content and other materials on our Services, including the Sportunity logo and all designs, text, graphics, pictures, information, data, software, sound files, other files and the selection and arrangement thereof (collectively, the “Service Materials”) are the proprietary property of Sportunity or our licensors or users, as applicable, and are protected by SSwitzerland and international copyright laws.
      </Text>
      <Text style={styles.text}>
        Subject to these Terms, you are granted a limited, nonexclusive, nontransferable, nonsublicensable license to access and use our Services and Service Materials. However, such license is revocable at any time and does not include any right to: (a) sell or resell our Services or the Service Materials; (b) collect and use any service listings, pictures or descriptions; (c) distribute, publicly perform or publicly display any of the Service Materials; (d) modify or otherwise make any derivative uses of our Services or the Service Materials, or any portion thereof; (e) use any data mining, robots or similar data gathering or extraction methods; (f) download (other than the page caching) any portion of our Services, the Service Materials or any information contained therein, except as expressly permitted by Sportunity in writing; or (g) use our Services or the Service Materials in violation of these Terms or for any purposes other than their intended purposes. Your right to use our Services and the Service Materials is conditioned upon your use of our Services and the Service Materials in accordance with these Terms. Accordingly, any use of the Services or the Service Materials other than as specifically authorized in these Terms, without the prior written permission of Sportunity, will automatically terminate the license granted above. Such unauthorized use may also violate applicable laws, including, without limitation, copyright and trademark laws and applicable communications regulations and statutes. Except for the license granted above, no additional rights are granted and nothing in these Terms will be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise.
      </Text>
      <Text style={styles.text}>
        Notwithstanding anything to the contrary in these Terms, our Services and the Service Materials may include software components provided by Sportunity or a third party that are subject to separate license terms, in which case those license terms will govern such software components.
      </Text>

      <Text style={styles.subtitle}>
        7. Copyright Complaints
      </Text>
      <Text style={styles.text}>
        We have a policy of limiting access to our Services and terminating the accounts of users who infringe the intellectual property rights of others. If you believe that anything on our Services infringes any copyright that you own or control, you may notify Sportunity as set forth below.
      </Text>
      <Text style={styles.text}>
        Sportunity
      </Text>
      <Text style={styles.text}>
        Rue du bugnon 20
      </Text>
      <Text style={styles.text}>
        1005 Lausanne
      </Text>
      <Text style={styles.text}>
        Switzerland
      </Text>
      <Text style={styles.text}>
        You should note that if you knowingly misrepresent in your notification that the material or activity is infringing, you may be liable for any damages, including costs and attorneys’ fees, incurred by Sportunity or the alleged infringer as the result of Sportunity’s relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing.
      </Text>

      <Text style={styles.subtitle}>
        8. Trademarks
      </Text>
      <Text style={styles.text}>
        “Sportunity,” the Sportunity logos and any other product or service name or slogan contained on our Services are trademarks of Sportunity and its suppliers or licensors and may not be copied, imitated or used, in whole or in part, without the prior written permission of Sportunity or the applicable trademark holder.
      </Text>
      <Text style={styles.text}>
        You may not use any metatags or any other hidden text utilizing “Sportunity” or any other name, trademark or product or service name of Sportunity without Sportunity’s prior written permission. In addition, the look and feel of our Services, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of Sportunity and may not be copied, imitated or used, in whole or in part, without Sportunity’s prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned on our Services are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by Sportunity.
      </Text>

      <Text style={styles.subtitle}>
        9. Third-Party Content
      </Text>
      <Text style={styles.text}>
        Our Services may include links to websites or content owned or operated by third parties as well as other third-party content, including advertisements, promotional offers, and social “widgets” (collectively, “Third-Party Content”). Sportunity does not own, control or endorse any Third-Party Content and makes no representation or warranties of any kind regarding the Third-Party Content, including, without limitation, regarding its accuracy or completeness. You acknowledge and agree that Sportunity is not responsible or liable in any manner for any Third-Party Content and undertakes no responsibility to update or review any Third-Party Content. You access and use such Third-Party Content at your own risk. The inclusion of Third-Party Content on our Services does not imply affiliation, endorsement or adoption by Sportunity of any information contained therein. In addition, your business dealings or correspondence with, or participation in the promotional offers of, any third party responsible for Third-Party Content, and any terms, conditions, warranties or representations associated with such dealings or promotional offers, are solely between you and such third party. Sportunity is not responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or promotions or as the result of the presence of such Third-Party Content on our Services. When you navigate away from or otherwise leave our Services, you should understand that Sportunity’s terms and policies no longer govern and that the terms and policies of those third-party sites will now apply. You should review the applicable terms and policies, including privacy and data gathering practices, of any site or services to which you navigate to from our Services.
      </Text>

      <Text style={styles.subtitle}>
        10. User Content and Interactive Areas
      </Text>
      <Text style={styles.text}>
        Our Services include interactive areas and features (“Interactive Areas”) that allow you or other users to create, post, share or store text, photos, videos and other materials (collectively, “User Content"). In the event you decide to share your User Content with others through our Services or third-party platforms, you understand that this User Content will be viewable by others. You are solely responsible for your User Content and for your use of any Interactive Areas.
      </Text>
      <Text style={styles.text}>
        You will not post, upload to, transmit, distribute, store, create or otherwise publish or send through our Services any of the following:
      </Text>
      <Text style={styles.text}>
        - User Content that is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening,
      </Text>
      <Text style={styles.text}>
        - User Content that is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory, fraudulent, false, misleading or otherwise objectionable;
      </Text>
      <Text style={styles.text}>
        - User Content that would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party or otherwise create liability or violate any local, state, national or international law;
      </Text>
      <Text style={styles.text}>
        - User Content that may infringe any patent, trademark, trade secret, copyright or other proprietary right of any party;
      </Text>
      <Text style={styles.text}>
        - User Content that contains or depicts any statements, remarks or claims that do not reflect your honest views and experiences;
      </Text>
      <Text style={styles.text}>
        - User Content that contains personal information about any person, including, without limitation, names, addresses, email address or credit card information without that person’s permission;
      </Text>
      <Text style={styles.text}>
        - User Content that impersonates or misrepresents your affiliation with any person or entity;
      </Text>
      <Text style={styles.text}>
        - Unsolicited promotions, political campaigning, advertising or solicitations;
      </Text>
      <Text style={styles.text}>
        - Viruses, corrupted data or other harmful, disruptive or destructive files or content;
      </Text>
      <Text style={styles.text}>
        - User Content that, in the sole judgment of Sportunity, is objectionable or which restricts or inhibits any other person from using or enjoying the Interactive Areas or our Services, or which may expose Sportunity or its users to any harm or liability of any type.
      </Text>
      <Text style={styles.text}>
        Sportunity does not control, take responsibility for or assume liability for any User Content posted, stored or uploaded by you or any third party, or for any loss or damage to such User Content. When you participate in Interactive Areas, you understand that certain User Content you choose to post may be displayed publicly or to select users. You are solely responsible for your use of our Services and the Interactive Areas and use them at your own risk.
      </Text>

      <Text style={styles.subtitle}>
        11. Rights to User Content
      </Text>
      <Text style={styles.text}>
        Sportunity claims no ownership or control over any User Content, except as otherwise expressly provided in these Terms or a separate agreement between you and Sportunity. However, if you submit or post User Content to our Services, unless Sportunity indicates otherwise, you grant Sportunity a worldwide, nonexclusive, perpetual, irrevocable, royalty-free, fully-paid up, and sub-licensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display your User Content in any media format and channel now known or later developed without compensation to you, including in connection with Sportunity’s marketing and promotional activities. You further grant Sportunity and Sportunity’s sublicensees the right to use the name that you submit in connection with User Content, if they choose.
      </Text>
      <Text style={styles.text}>
        By submitting or posting User Content to our Services, you represent and warrant that: (a) such User Content is non-confidential; (b) you own and control all of the rights to the User Content that you post or you otherwise have all necessary rights to post such User Content on our Services; (c) the User Content is accurate and not misleading or harmful in any manner; and (d) the User Content, and your use and posting thereof in connection with our Services, does not and will not violate these Terms or any applicable law, rule, regulation or third-party right.
      </Text>

      <Text style={styles.subtitle}>
        12. Acceptable Use of Our Services
      </Text>
      <Text style={styles.text}>
        Your use of our Services will not violate any law, contract, intellectual property or other third-party right or constitute a tort, and you are solely responsible for your conduct while on our Services. You will not:
      </Text>
      <Text style={styles.text}>
        - Use our Services in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying our Services, or that could damage, disable, overburden or impair the functioning of our Services in any manner;
      </Text>
      <Text style={styles.text}>
        - Engage in any discriminatory, defamatory, hateful, harassing, abusive, obscene, threatening, physically dangerous, or otherwise objectionable conduct;
      </Text>
      <Text style={styles.text}>
        - Attempt to indicate in any manner that you have a relationship with Sportunity or that Sportunity has endorsed you or any services for any purpose unless Sportunity has provided written permission to do so;
      </Text>
      <Text style={styles.text}>
        - Send any unsolicited or unauthorized advertising, solicitations, promotional materials, spam, junk mail, chain letters or pyramid schemes, or harvest or collect the email addresses or other contact information of other users for the purpose of sending spam or other commercial messages;
      </Text>
      <Text style={styles.text}>
        - Attempt to reverse engineer any aspect of our Services or do anything that might discover source code or bypass or circumvent measures employed to prevent or limit access to any area, content or code of our Services (except as otherwise expressly permitted by law);
      </Text>
      <Text style={styles.text}>
        - Access, use or attempt to access or use another's account without authorization from such user and Sportunity;
      </Text>
      <Text style={styles.text}>
        - Develop any third-party application that interacts with User Content or our Services without Sportunity’s prior written consent;
      </Text>
      <Text style={styles.text}>
        - Use any robot, iframe, spider, crawler, scraper or other automated means or interface not provided or authorized by Sportunity to access out Services, including, without limitation, for the purpose of copying, extracting, aggregating, displaying, publishing or distributing any content or data made available via our Services;
      </Text>
      <Text style={styles.text}>
        - Use our Services for any illegal or unauthorized purpose, or engage in, encourage or promote any activity that violates these Terms.
      </Text>

      <Text style={styles.subtitle}>
        13. Events creation booking and cancellation
      </Text>
      <Text style={styles.text}>
        Main organizer is:
      </Text>
      <Text style={styles.text}>
        - Legally and financially in charge of the event
      </Text>
      <Text style={styles.text}>
        - In charge of cancelling the even and sharing information with participants
      </Text>
      <Text style={styles.text}>
        Once any course is chosen by the Participant, the Participant can then book the course immediately through Sportunity.
        The booking may be rejected and/or not executed by either Sportunity or the main organizer for the following reasons:
        The booking is made by an under aged Participant without the consent from his Parent or guardian;
      </Text>
      <Text style={styles.text}>
        - The Participant does not send documents requested in time;
      </Text>
      <Text style={styles.text}>
        - The Participant does not make payment by the requested date;
      </Text>
      <Text style={styles.text}>
        - The Participant cannot be reached;
      </Text>
      <Text style={styles.text}>
        - The Participant provided untruthful information during the online booking;
      </Text>
      <Text style={styles.text}>
        - The event is deemed unsuitable for the Participant;
      </Text>
      <Text style={styles.text}>
        - There are practical reasons for rejection of the booking;
      </Text>
      <Text style={styles.text}>
        - The booking is deemed to be unsuitable for any other reasons.
      </Text>
      <Text style={styles.text}>
        Sportunity is neither a party to that contract between main organizer and secondary organizer(s) nor between main organizer and participant(s). Sportunity’ role is solely that of facilitator. SPORTUNITY carries an obligation to make her best effort, not an obligation to procure any result. Sportunity’ system in only a tool to enable user to easier practice sport in better condition. Sportunity will request the main organizer to send all necessary documents directly to the Participant(s) and secondary organizer(s).
      </Text>

      <Text style={styles.subtitle}>
        14. Feedback
      </Text>
      <Text style={styles.text}>
        Separate and apart from User Content, you can submit questions, comments, feedback, suggestions, ideas, plans, notes, drawings, original or creative materials or other information, regarding our Services or Sportunity (collectively, “Feedback”). Feedback is non-confidential and will become the sole property of Sportunity. Sportunity will own, and you hereby assign to Sportunity, all right, title, and interest, including all intellectual property rights, in and to such Feedback, and Sportunity will be entitled to the unrestricted use and dissemination of Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you. You agree to execute any documentation required by Sportunity to confirm such assignment to Sportunity.
      </Text>

      <Text style={styles.subtitle}>
        15. Indemnification
      </Text>
      <Text style={styles.text}>
        You will defend, indemnify and hold harmless Sportunity, its independent contractors, service providers and consultants, and their respective directors, officers, employees and agents (collectively, “Sportunity Parties”), from and against any claims, damages, costs, liabilities and expenses (including, but not limited to, reasonable attorneys' fees) arising out of or related to (a) your access to or use of our Services; (b) any User Content or Feedback you provide; (c) your violation of these Terms; (d) your violation, misappropriation or infringement of any rights of another (including intellectual property rights or privacy rights); or (e) your conduct in connection with our Services.
      </Text>

      <Text style={styles.subtitle}>
        16. Disclaimers
      </Text>
      <Text style={styles.text}>
        We do not control, endorse or take responsibility for any third-party content available on or linked to by our Services, including User Content.
        Your use of our Services is at your sole risk. Our Services are provided “as is” and “as available” without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In addition, Sportunity does not represent or warrant that our Services are accurate, complete, reliable, current or error-free. While Sportunity attempts to make your access to and use of our Services safe, we cannot and do not represent or warrant that our Services or servers are free of viruses or other harmful components. You assume the entire risk as to the quality and performance of the Services.
      </Text>

      <Text style={styles.subtitle}>
        17. Limitation of Liability
      </Text>
      <Text style={styles.textBold}>
        Sportunity and the other Sportunity Parties will not be liable to you under any theory of liability—whether based in contract, tort, negligence, strict liability, warranty, or otherwise—for any indirect, consequential, exemplary, incidental, special or punitive damages or lost profits, to the fullest extent permitted by the applicable law, even if Sportunity or the other Sportunity Parties have been advised of the possibility of such damages. The limitations of liability set for in this section will apply even if the remedies otherwise provided under these Terms, at law or in equity, fail of their essential purpose.
      </Text>
      <Text style={styles.textBold}>
        The total liability of Sportunity and the other Sportunity Parties, for any claim arising out of or relating to these Terms or our Services, regardless of the form of the action, is limited to the greater of (a) the amount paid, if any, by you to access or use our Services or (b) $100.
      </Text>
      <Text style={styles.textBold}>
        The limitations set forth in this section will not limit or exclude liability for the gross negligence, fraud or intentional misconduct of Sportunity or the other Sportunity Parties.
      </Text>

      <Text style={styles.subtitle}>
        18. Termination

      </Text>
      <Text style={styles.text}>
        Sportunity reserves the right, without notice and in its sole discretion, to terminate your license to access and use our Services and to block or prevent your future access to and use of our Services.
      </Text>

      <Text style={styles.subtitle}>
        19. Changes to These Terms
      </Text>
      <Text style={styles.text}>
        We may make changes to these Terms from time to time. If we make changes, we will post the amended Terms to our Services and update the “Last Updated” date above. We may also attempt to notify you by sending an email notification to the address associated with your account or providing notice through our Services. Unless we say otherwise in our notice, the amended Terms will be effective immediately and your continued access to and use of our Services after we provide notice will confirm your acceptance of the changes. If you do not agree to the amended Terms, you must stop accessing and using our Services.
      </Text>

      <Text style={styles.subtitle}>
        20. Severability
      </Text>
      <Text style={styles.text}>
        These Terms constitute the entire agreement between you and Sportunity relating to your access to and use of our Services and your order, receipt and use of products or services made available through our Services. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without the prior written consent of Sportunity. No waiver of any provision of these Terms will constitute a waiver of such provision in any prior, concurrent or subsequent circumstance, and Sportunity’s failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision. Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third party beneficiary rights upon any other person or entity.
      </Text>

      <Text style={styles.subtitle}>
        21. Miscellaneous
      </Text>
      <Text style={styles.text}>
        These Terms constitute the entire agreement between you and Sportunity relating to your access to and use of our Services and your order, receipt and use of products or services made available through our Services. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without the prior written consent of Sportunity. No waiver of any provision of these Terms will constitute a waiver of such provision in any prior, concurrent or subsequent circumstance, and Sportunity’s failure to assert any right or provision under these Terms will not constitute a waiver of such right or provision. Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third party beneficiary rights upon any other person or entity.
      </Text>

      <Text style={styles.subtitle}>
        22. Privacy
      </Text>
      <Text style={styles.text}>
        By using any of the Sportunity Websites, you acknowledge irrevocably that you have read and that you do accept Sportunity’s Privacy Policy. You consent to the processing of your personal data by Sportunity and/or its assignees in accordance with that Privacy Policy Statement.
      </Text>

      <Text style={styles.subtitle}>
        23. Applicable law and Jurisdiction
      </Text>
      <Text style={styles.text}>
        These are governed by the laws of Switzerland. All disputes arising out of or in connection with these Terms shall be subjected to the exclusive jurisdiction of the courts of Sportunity’ place of business. However, Sportunity 2 may seek emergency relief before any competent court or tribunal in the event of a breach or anticipated breach
      </Text>




    </ScrollView>
  );
}

export default TermsOfUse;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.doubleBaseMargin,
    // backgroundColor: colors.background,
    // alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: fonts.size.regular,
    color: colors.darkGrey,
    marginVertical: metrics.baseMargin,
    fontWeight: 'bold',
  },
  subtitle: {
    alignSelf: 'flex-start',
    fontSize: fonts.size.medium,
    color: colors.darkGrey,
    marginVertical: metrics.baseMargin,
    fontWeight: 'bold',
  },
  subSubtitle: {
    alignSelf: 'flex-start',
    fontSize: fonts.size.small,
    color: colors.darkGrey,
    marginVertical: metrics.baseMargin,
    fontWeight: 'bold',
  },
  text: {
    fontSize: fonts.size.small,
    color: colors.darkGrey,
    marginVertical: metrics.baseMargin,
  },
  textBold: {
    fontSize: fonts.size.small,
    color: colors.darkGrey,
    marginVertical: metrics.baseMargin,
    fontWeight: 'bold',
  },
});
