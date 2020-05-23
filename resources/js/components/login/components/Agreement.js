import React from 'react';
import ReactDOM from 'react-dom';
import { Text, Page, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 600,
    marginBottom: 10
  },
  heading: {
    textAlign: 'center',
    fontSize: 30
  },
  secondary: {
    fontSize: 15
  },
  section: {
    padding: 20
  },
  footer: {
    width: 600,
    height: 50
  },
  headingsecondary: {
    fontSize: 25,
    textDecoration: 'underline'
  },
  headingtertiary: {
    fontSize: 20
  },
  signature: {
    height: 25,
    width: 100
  }
});

class Agreement extends React.Component{
  render(){
    return (
      <PDFViewer width="100%" height="900px">
        <Document title="Hello.pdf">
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.heading}>
                <Text>VENDOR AGREEMENT{"\n"}{"\n"}</Text>
              </View>
              <View>
                <Text>
                  THIS VENDOR AGEEMENT (the "Agreement") is made this _____ day of _____________, 20 __{"\n"}
                  BETWEEN:{"\n\n"}
                  CADENTIC®{"\n\n"}
                  (The Client){"\n\n\n\n"}
                  OF THE FIRST PART{"\n\n"}
                  AND{"\n\n"}
                  ___________________________of______________________________________{"\n\n"}
                  (The 'Vendor'){"\n\n\n\n"}
                  OF THE SECOND PART{"\n\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  This agreement will be considered agreed and valid upon signature by both parties. All activities and services provided by the Vendor will be supervised by the Client’s staff as listed below and will be applicable to the following terms and conditions.
                {"\n\n\n\n\n"}</Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.heading}>
                <Text>TERMS OF AGREEMENT{"\n"}{"\n"}</Text>
              </View>
              <View style={styles.headingsecondary}>
                <Text>
                  SCOPE OF ENGAGEMENT:{"\n\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  The Vendor will supply the following deliverables or services to the client, pursuant to the terms of this vendor agreement:{"\n\n"}
                  Deliverables or Services to be supplied{"\n\n"}
                  1. ____________________________________________________{"\n"}
                  2. ____________________________________________________{"\n"}
                  3. ____________________________________________________{"\n"}
                  4. _____________________________________________________{"\n"}
                  5. ____________________________________________________{"\n"}
                  6. _____________________________________________________{"\n"}
                  7. ______________________________________________________{"\n\n"}
                </Text>
              </View>
              <View>
                <Text style={{textDecoration: 'underline', textAlign: 'center'}}>
                  RIGHT TO TERMINATE{"\n\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  CADENTIC®  may terminate this Agreement at any time, including with respect to any work in process, if (i) Vendor fails to obtain, or maintain as valid, any license, insurance, permit or approval required to allow lawful performance of the Services; (ii) CADENTIC®  determines, in its sole discretion, that Vendor is not complying with any Law, (iii) Vendor has failed to perform the Services in a workmanlike manner or in a timely way; (iv) Vendor breaches any material term or condition of this Agreement; or (v) CADENTIC®  determines, in its sole discretion, that Vendor is not financially stable or responsible. Notice of termination pursuant to this Paragraph  shall be in writing and shall be effective upon receipt thereof. b. CADENTIC® may terminate this Agreement for any reason at any time upon ten (10) days prior written notice
                  {"\n\n\n\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.headingtertiary}>
                <Text>
                  Insurance{"\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  The Vendor agrees to purchase the necessary insurance during the term of this agreement and upon request shall provide proof of such insurance to the Client.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary}>
                <Text>
                  Failure to Maintain Coverage{"\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  In the instance the Vendor should fail to maintain or provide proof of insurance, the Client shall consider such actions to be a breach of this vendor agreement and will be grounds for termination.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary}>
                <Text>
                  Advance Payment{"\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  After the execution of this agreement. All payments to be made under this agreement shall be made by paying an advance of ____ percent. Which shall be non refundable and the remaining balance payed in full at the closing.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary}>
                <Text>
                  Failure to make payment{"\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  In the event that the vendor fails to make whatsoever payment due and payable to the client hereunder after a period of 30 days, the client may, at its sole option, terminate this agreement and the vendor will be liable to pay damages to the client.
                  {"\n\n\n"}
                </Text>
              </View>
              <View>
                <Text style={{textDecoration: 'underline', textAlign: 'center'}}>
                  FEES{"\n\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                CADENTIC® shall pay Vendor the fee set forth on the applicable Purchase Order for the Services designated thereon. In the event CADENTIC® and Vendor shall agree to additional Services or a reduction in Services, such agreement shall be included on a Change Order stipulating the change in Services and fees. Vendor shall invoice CADENTIC® for fees due and owing at such time(s) as set forth in the applicable Purchase Order. Payment of any invoice is not evidence of NDEDGE INFORMATICS PRIVATE LIMITED’s acceptance of the Services as complete or workmanlike. Each invoice of the Vendor shall include: (a) a description identifying the Services; (b) CADENTIC®’s Purchase Order number; and (c) any other information or documentation CADENTIC® may request.
                {"\n\n\n\n\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  Penalty{"\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                  In the event that any of the parties breaches any contractual provisions of this agreement. The defaulting party would be liable to pay the sum of ______ to the innocent party as damages and compensation and the innocent party have the right to rescind the contract if he chooses to.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingsecondary}>
                <Text>
                  REPRESENTATIONS, WARRANTIES AND COVENANTS OF VENDOR{"\n\n"}
                </Text>
              </View>
              <View style={styles.secondary}>
                <Text>
                Vendor represents and warrants to CADENTIC®  that Vendor: a. Understands the hazards and risks which are presented to human beings, property and the environment in performing the Services; b. Is engaged in the business of providing the Services and has developed the requisite expertise for the proper completion of the Services; c. Is familiar with and will comply with all applicable orders, ordinances, rules, regulations, statutes and laws imposed by any local, state or federal government d. Governing the Services (“Laws”) including, without limitation, those Laws dealing with hazardous wastes and materials, the transportation of hazardous materials, occupational safety and health, safety management standards and e. Shall perform the Services in a safe and workmanlike manner, pursuant to the generally accepted standards, practices and procedures for Vendors performing similar services in industry; f. Has obtained or shall obtain all permits, licenses, certificates or approvals required to comply with all Laws in the performance of this Agreement. Vendor shall provide CADENTIC® with reasonable advance written notice if any such permit, license, certificate or approval becomes a subject of judicial or administrative action seeking revocation or suspension; and g. Has inspected the areas in which Services are to be performed and all surrounding areas.
                {"\n\n\n\n\n\n\n\n\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  INDEMNIFICATION{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                Vendor shall indemnify, defend and hold CADENTIC®  harmless from and against any damages, judgments, final decisions, settlements, fines, penalties, reasonable attorneys’ fees, claims, demands, costs and expenses (“Losses”) incurred by CADENTIC®  arising out of the Services, including, without limitation Losses from: i. Alleged personal injuries to any person, including, but not limited to, a person employed by Vendor, CADENTIC®  or a third party; ii. For physical damage to property arising out of the Vendor’s, its employees’, agents’ and subcontractors’, acts or omissions in performing the Services; iii. Damage to the environment; or iv. Based upon breach by Vendor of any representation, warranty or covenant contained in this Agreement b. CADENTIC® agrees to indemnify, defend and hold Vendor harmless from and against Losses incurred by Vendor: i. For claims, personal injuries or physical damage to property arising solely out of negligent act or omission of CADENTIC®, its agents or employees; or ii. Based upon breach of any representation, warranty or covenant under this Agreement by CADENTIC®, its agents or employees c. The party seeking indemnification (the”Indemnitee”) shall give written notice to the party providing indemnification (the “Indemnitor”) of a claim for indemnification under this provision within ninety (90) days following the Indemnitee’s first knowledge of the event or occurrence which gives rise to that claim. Upon receipt of such notice, the Indemnitor shall take such reasonable steps as may be necessary or appropriate to defend the Indemnitee and will bear the cost of reasonable attorneys’ fees and other litigation expenses until such time that the Indemnitor proves that no further indemnification with respect to said claim is owed.
                {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  CONFIDENTIALITY{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                In addition to any obligations for confidentiality contained in any prior agreement, Vendor shall treat as confidential property and not disclose to others during or subsequent to the Term of this Agreement, except as is necessary to perform this Agreement, (and then only on a confidential basis satisfactory to CADENTIC® ), any information (including any technical information, experience or data) regarding the Services or CADENTIC® ’s plans, project plans, specifications, programs, plants, sites, processes, products, costs, equipment, operations or customers which may come within Vendor’s, its officers’ or employees’ knowledge in the performance of this Agreement, without in each instance securing the prior written consent of CADENTIC® . Nothing above, however, shall prevent Vendor from disclosing to others or using in any manner information which Vendor can show: a. Has been published and has become part of the public domain other than by acts, omissions or fault of the Vendor, its officers or its employees; b. Has been furnished or made known to Vendor by third parties (other than those directly or indirectly for or on behalf of CADENTIC® ) as a matter of legal right without restrictions on its disclosure; or c. Was in its lawful possession prior to the disclosure thereof to Vendor. Vendor shall return to CADENTIC® within three months of completion of the Vendor’s Services or immediately upon request of CADENTIC® all copies of all specifications, plans, drawings and the like. The foregoing obligations shall survive the termination or expiration of the Agreement.
                {"\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  INSPECTIONS{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  CADENTIC®shall have the right, but not the duty, to inspect and obtain copies of all written licenses, permits or approvals, issued by any governmental entity or agency to Vendor or its subcontractors, which are applicable to the performance of this Agreement and to inspect the performance of the Services. Such inspections shall not operate to relieve Vendor of its obligations or liability under this Agreement. Vendor shall provide to CADENTIC® access to subcontractors, agents and employees upon request.
                {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  EXCUSE OF PERFORMANCE{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  The performance of this Agreement, except for the payment of money for Services already rendered, may be suspended by either party in the event the Services are prevented by a cause or causes beyond the reasonable control of such party. Such causes shall include, but not be limited to, acts of God, acts of war, riot, fire, explosion, accident, flood or sabotage; Laws or governmental actions; national defense requirements; injunctions or restraining orders. The party asserting a right to suspend performance under this Paragraph must, within a reasonable time after it has knowledge of the effective cause, notify the other party of the cause for suspension, the performance suspended and the anticipated duration of suspension. The party asserting a right to suspend performance hereunder shall advise the other party when the suspending event has ended and when performance will be resumed.CADENTIC® may, upon suspension of Services by Vendor, terminate this Agreement or any Services scheduled to be performed but not yet completed by providing written notice of termination to Vendor.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  INDEPENDENT VENDORS{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  Vendor is and shall perform this Agreement as an independent Vendor, and as such, shall have and maintain complete control over all of its employees, agents and operations. Neither Vendor nor anyone employed by it shall be, represent, act, purport to act or be deemed to be the agent, representative employee or servant of CADENTIC®.As between the parties, Vendor shall be solely responsible for determining the specific techniques for completing the Services, including providing the  necessary.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  WAIVER{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  Any waiver by either party of any provision or condition of this Agreement shall not be construed or deemed to be a waiver of any other provision or condition of this Agreement, nor a waiver of a subsequent breach of the same provision or condition, unless such is expressed in writing and signed by the party to be bound.
                  {"\n\n\n\n\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  MISCELLANEOUS{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  The validity, interpretation and performance of this Agreement shall be governed and construed in accordance with the Laws of the India. All paragraph headings herein are for convenience only and are in no way to be construed as part of this Agreement or as a limitation of Agreement or as a limitation of the scope of the particular section to which they refer. In the event of a conflict between the terms or conditions of this Agreement and those of any other document, the terms and conditions of this Agreement shall control.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  SEVERABILITY{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                If any paragraph, subparagraph, section, subsection, sentence or clause of this Agreement shall be adjudged illegal, invalid or unenforceable, such illegality, invalidity or unenforceability shall not affect the legality, validity or enforceability of the Agreement as a whole or of any paragraph, subparagraph, section, subsection, sentence or clause hereof not so adjudged. The parties will endeavor to replace the invalid or null and void provisions by those, which correspond best to the intentions of the parties hereto.
                {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingtertiary, {textAlign: 'center'}}>
                <Text>
                  SUBCONTRACTS AND ASSIGNMENT{"\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  The covenants and agreements contained in this Agreement shall apply to, inure to the benefit of and be binding upon the parties hereto and upon their respective heirs, executors, administrators, assigns and successors in interest. This Agreement may not be assigned by Vendor nor may any subcontract be entered into without written authorization from CADENTIC®.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingsecondary, {textAlign: 'center', textDecoration: 'underline'}}>
                <Text>
                  BUSINESS NON - DISCLOSURE  AGREEMENT (NDA){"\n\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  This Agreement made on this Wednesday day of   ...12th February  2019   (the ‘Effective Date’)
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingsecondary, {textDecoration: 'underline'}}>
                <Text>
                  BETWEEN{"\n\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  Details of Disclosing Party, Bell Vue Clinic having its Registered Office at 9, Dr U.N. Brahmachari (Formerly Loudon Street), Kolkata 700017. Herein after referred to as the "Disclosing Party"
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingsecondary, {textDecoration: 'underline'}}>
                <Text>
                  AND{"\n\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                Details of Receiving Party, Cadentic LP.110/36/3 manashbhumi manickpur Po.Italagacha kolkata - 700079 {"\n"}(Hereinafter referred to, individually, as the “Party” and collectively, as the “Parties”)
                  {"\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={styles.headingsecondary, {textDecoration: 'underline'}}>
                <Text>
                  Background:{"\n\n"}
                </Text>
              </View>
              <View style={{fontSize: 13.5}}>
                <Text>
                  i) The Parties are, or will be, evaluating, discussing and negotiating a potential contractual relationship concerning the Oracle Database. Maintenance Services  (the ‘Project’).{"\n\n"}
                  ii) The Parties may, in these evaluations, discussions and negotiations, disclose to each other information that is technically and /or commercially confidential.{"\n\n"}
                  iii) The Parties have agreed that disclosure and use of such technical and/or commercial confidential information shall be made and on the terms and conditions of this Agreement.
                  {"\n\n"}
                </Text>
              </View>
              <View style={styles.headingsecondary, {textDecoration: 'underline'}}>
                <Text>
                  Now it is agreed as follows:{"\n\n"}
                </Text>
              </View>
              <View style={{fontSize: 13}}>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  1.1 Definition:{"\n\n"}
                </Text>
                <Text>
                  In this Agreement the following terms shall, unless the context otherwise requires, have the following meanings:{"\n\n"}
                  1.1 ‘Disclosing Party’ means the Party disclosing Confidential Information to the other Party under this Agreement.{"\n\n"}
                  1.2 ‘Receiving Party’ means the Party receiving Confidential Information from the other Party under this Agreement.{"\n\n"}
                  1.3 ‘Confidential Information’ means any information, which shall include but is not limited to, design, fabrication & assembly drawings, know-how, processes, product specifications, raw materials, trade secrets, market opportunities, or business or financial affairs of the Parties or their customers, product samples, inventions, concepts and any other technical and/or commercial information, disclosed directly or indirectly and in any form whatsoever (including, but not limited to, disclosure made in writing, oral or in the form of samples, models, computer programs, drawings or other instruments) furnished by the Disclosing Party to the Receiving Party under this Agreement.{"\n\n"}
                  1.3.1 Such Confidential Information shall also include but shall not be limited to:{"\n\n"}
                  1.3.1.1 information disclosed by the Disclosing Party in writing marked as confidential at the time of disclosure;{"\n"}
                  1.3.1.2 information disclosed by the Disclosing Party orally which is slated to be confidential at the time of disclosure;{"\n"}
                  1.3.1.3 information disclosed in any other manner is designated in writing as Confidential Information at the time of disclosure; or{"\n"}
                  1.3.1.4 notwithstanding sub-clauses 1.3.1.1, 1.3.1.2 and 1.3.1.3 of this definition, any information whose nature makes it obvious that it is confidential.{"\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={{fontSize: 13}}>
                <Text>
                1.3.2 Such Confidential Information shall not include any information which:{"\n\n"}
                1.3.2.1 is, at the time of disclosure, publicly known; or{"\n"}
                1.3.2.2 becomes at a later date, publicly available otherwise than a wrongful act or negligence or breach of this Agreement of or by the Receiving Party; or{"\n"}
                1.3.2.3 the Receiving Party can demonstrate by its written records was in its possession, or known to the Receiving Party, before receipt under this Agreement, and which was not previously acquired under an obligation of confidentiality; or{"\n"}
                1.3.2.4 is  legitimately   obtained  at  any  time  by the Receiving  Party from a third party without restrictions in respect of disclosure or use; or{"\n"}
                1.3.2.5 the  Receiving  Party can demonstrate to the satisfaction of the Disclosing Party, has been developed independently of its obligations under this Agreement and without access to the Confidential Information.{"\n\n"}
                1.4 ‘Purpose’ means the evaluations, discussions, negotiations and execution regarding a contractual relationship between the Parties in respect of the Project defined in paragraph (i) of the Background section.{"\n\n"}
                1.5 ‘Affiliate’ means any legal entity which, at the time of disclosure to it on any Confidential Information, is directly or indirectly controlling, controlled by or under common control with any of the Parties.{"\n\n"}
                1.6 ‘Contemplated Agreement’ means any future legally binding Agreement between the Parties in respect of the Project envisaged under this Agreement.{"\n\n"}
                1.7 "Project" shall mean and include any assignment, work, job being offered or given by Disclosing Party to Receiving Party in directly or indirectly in relation to this agreement.{"\n\n"}
                1.8 "NDA" shall mean this Non-Disclosure Agreement unless otherwise specified.
                {"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  2.1 Non-Disclosure of Confidential Information:{"\n\n"}
                </Text>
                <Text>
                  2.1 In consideration of the disclosure of Confidential Information by the Disclosing Party to the Receiving Party solely for the Purpose, the Receiving Party undertakes whether by itself, its successors and heirs, not to disclose Confidential Information to any third party, unless in accordance with Clause 4.{"\n\n"}
                  2.2 In addition to the undertaking in Clause 2.1, the Receiving Party shall be liable for:{"\n\n"}
                  2.2.2.1 Any loss, theft or other inadvertent disclosure of Confidential Information, and
                  {"\n\n\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={{fontSize: 13}}>
                <Text>
                  2.2.2.2 Any unauthorized disclosure of Confidential Information by persons (including, but not limited to, present and former employees) or entities to whom the Receiving Party under this Agreement has the right to disclose Confidential Information, except where, the Receiving Party has used the same degree of care in safeguarding such Confidential Information as it uses for its own Confidential Information of like importance and in no event less than a reasonable degree of care; and upon becoming aware of such inadvertent or unauthorized disclosure the Receiving Party has promptly notified the Disclosing Party thereof and taken all reasonable measures to mitigate the effects of such disclosure and to prevent further disclosure.{"\n\n"}
                  2.3 The Receiving Party understands and agrees that:{"\n\n"}
                  2.3.1 Any information known only to a few people to whom it might be of commercial interest and not generally known to the public is not public knowledge;{"\n"}
                  2.3.2 A combination of two or more parts of the Confidential Information is not public knowledge merely because each part is separately available to the public.{"\n\n"}
                  2.4 The Receiving Party acknowledges the technical, commercial and strategic value of the Confidential Information to the Disclosing Party and understands that unauthorized disclosure of such Confidential Information will be injurious to the Disclosing Party.
                  {"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  3.1 Use of Confidential Information:{"\n\n"}
                </Text>
                <Text>
                  The Receiving Party is entitled to use the Confidential Information but only for the Purpose.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  4.1 Permitted Disclosure of Confidential Information:{"\n\n"}
                </Text>
                <Text>
                  4.1 The Receiving Party may disclose in confidence Confidential Information to any of its Affiliates and employees, in which event the Affiliate and employee shall be entitled to use the Confidential Information but only to the same extent the Receiving Party is permitted to do so under this Agreement. The Receiving Party agrees that such Affiliates or employees are subject to confidentiality obligations no less restrictive than those of this Agreement.{"\n\n"}
                  4.2 The Receiving Party shall limit the dissemination of Confidential Information of its Affiliates and employees having a need to receive such information to carry out the Purpose.{"\n\n"}
                  4.3 The Receiving Party may disclose Confidential Information to its consultants, contractors, sub-contractors, agents or similar persons and entities having a need to receive such information to carry out the Purpose on the prior written consent of the Disclosing Party. In the event that the Disclosing Party gives such consents, the Receiving Party agrees that such individuals are subject to confidentiality obligations no less restrictive than those of this Agreement.{"\n\n\n\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={{fontSize: 13}}>
                <Text>
                  4.4 Notwithstanding Clause 2.1, the Receiving Party shall not be prevented from disclosing Confidential Information, where (i) such disclosure is in response to a valid order of a court or any other governmental body having jurisdiction over this Agreement or (ii) such disclosure is otherwise required by law, provided that the Receiving Party, to the extent possible, has first given prior written notice to the Disclosing Party and made reasonable efforts to protect the Confidential Information in connection with such disclosure.
                  {"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  5.1 Copying and Return of Furnished Instruments:{"\n\n"}
                </Text>
                <Text>
                  5.1 The Receiving Party shall not be entitled to copy samples, models, computer programs, drawings, documents or other instruments furnished by the Disclosing Party hereunder and containing Confidential Information, unless and to the extent it is necessary for the Purpose.{"\n\n"}
                  5.2 All samples, models, computer programs, drawings, documents and other instruments furnished hereunder and containing Confidential Information shall remain the Disclosing Party’s property.{"\n\n"}
                  5.3 At any time upon request from the Disclosing Party or upon the conclusion of the Purpose or expiry of this Agreement, the Receiving Party, at its own cost, will return or procure the return, promptly and in any event within 14 days of receipt of such request, of each and every copy of Confidential Information given by the Disclosing Party, and satisfy the Disclosing Party that it no longer holds any further Confidential Information.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  6.1 Non-Disclosure of Negotiations:{"\n\n"}
                </Text>
                <Text>
                  Except as provided in Clause 4, each Party agrees that it will not, without the other Party’s prior written approval, disclose to any third party the fact that the Parties are discussing the Project. The Parties acknowledge that the provisions of this Agreement shall apply in respect of the content of any such discussions. The undertaking set forth in this Clause 7 shall survive the termination of this Agreement.
                  {"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  7.1 Term and Termination:{"\n\n"}
                </Text>
                <Text>
                  7.1 This Agreement shall become effective on the Effective Date. The provisions of this Agreement shall however apply retroactively to any Confidential Information, which may have been disclosed in connection with discussions and negotiations regarding the Project prior to the Effective Date.{"\n\n"}
                  7.2 This Agreement shall remain in force for two (2) years from the Effective Date, except to the extent this Agreement is superseded by stipulations of the Contemplated Agreements.{"\n\n"}
                  7.3 The rights and obligations of each Party with respect to all Confidential Information of the other Party that is received under this Agreement shall remain in effect for a period of two (2) years from the date of disclosure of Confidential Information.{"\n"}
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={{fontSize: 13}}>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  8.1 Intellectual Property Rights:{"\n\n"}
                </Text>
                <Text>
                  All Confidential Information disclosed herein shall remain the sole property of the Disclosing Party and the Receiving Party shall obtain no right thereto of any kind by reason of this Agreement.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  9.1 Future Agreements:{"\n\n"}
                </Text>
                <Text>
                  Nothing in this Agreement shall obligate either Party to enter into any further Agreements.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  10.1 Amendments:{"\n\n"}
                </Text>
                <Text>
                  Any amendment to this Agreement shall be agreed in writing by both Parties and shall refer to this Agreement.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  11.1 Severance:{"\n\n"}
                </Text>
                <Text>
                  If any term or provision in this Agreement is held to be either illegal or unenforceable, in whole or in part, under any enactment or rule of law, such term or provision or part shall to that extent be deemed not to form part of this Agreement, but the validity and enforceability of the remainder of this Agreement shall not be affected.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  12.1 Governing Law:{"\n\n"}
                </Text>
                <Text>
                  This Agreement shall be governed by and construed in accordance with the laws of India and in any dispute arising out of or relating to this agreement, the Parties submit to the exclusive jurisdiction of the Courts situated at Kolkata, India.{"\n\n"}
                </Text>
                <Text style={{textDecoration: 'underline', fontSize: 16}}>
                  13.1 General:{"\n\n"}
                </Text>
                <Text style={{fontSize: 12.35}}>
                  13.1 Upon 60 days written notice, the Disclosing Party may audit the use of the programs, materials, marketing materials, services, and such additional disclosed resources. The Receiving Party agrees to co-operate with the Disclosing Party’s audit and to provide reasonable assistance and access to information.{"\n\n"}
                  13.2 The Disclosing Party shall not have any liability to the Receiving Party for any claims made by third parties arising out of their use of the Disclosing Party’s trademarks (including “Logo”) or marketing materials. The Receiving Party agrees to indemnify the Disclosing Party for any loss, liability, damages, cost or expense (including attorney’s fees) arising out of any claims, which may be made against the Disclosing Party arising out of their use of the Logo or marketing materials where such claim relates to their activities, products or services. Notwithstanding above, the Receiving Party shall have no obligation to indemnify the Disclosing Party with respect to a claim of trademark or copyright infringement based upon their use of the Logo or marketing materials, as expressly permitted under this Agreement.
                </Text>
              </View>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
          <Page>
            <Image src="agreement_header.png" style={styles.image}/>
            <View style={styles.section}>
              <View style={{fontSize: 13}}>
                <Text>
                  13.3 The Receiving Party shall disclose of any similar agreements explicit or otherwise, for similar purpose/application with in its own organization, or any other third party.{"\n\n"}
                  13.4 In the event of a breach or threatened breach by the Receiving Party of any provisions of this Agreement, the Disclosing Party, in addition to and not in limitation of any other rights, remedies or damages available to the Disclosing Party at law or in equity, shall be entitled to a temporary restraining order / preliminary injunction in order to prevent or to restrain any such breach by the Receiving Party, or by any or all persons directly or indirectly acting for, on behalf of, or with the Receiving Party.{"\n\n"}
                </Text>
                <Text>
                  IN WITNESS WHEREOF, this Agreement is made effective as of the date first written above.{"\n\n"}
                  Vendor’s signature below acknowledges Vendor’s agreement to the terms and conditions of this Agreement.{"\n\n\n"}
                  AGREED AND ACCEPTED BY VENDOR:{"\n\n"}
                </Text>
              </View>
              <View>
                <Text>For  and  on  behalf  of Disclosing Party</Text>
              </View>
              <View style={{fontSize: 13}}>
                <Text>
                  Sign:{"\n\n"}
                  Name:{"\n\n"}
                  Address:{"\n\n"}
                </Text>
              </View>
              <View>
                <Text>For  and  on  behalf  of Receiving Party</Text>
              </View>
              <View style={{fontSize: 13}}>
                <Text>
                  Sign:<Image src="aq sert.png" style={styles.signature}/>{"\n\n"}
                  Name:{"\n\n"}
                  Address:{"\n\n"}
                </Text>
              </View>
              <Text>
                Date:{"\n\n\n\n\n\n\n\n"}
              </Text>
            </View>
            <Image src="agreement_footer.png" style={styles.footer}/>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

export default Agreement;

if (document.getElementById('agreement')) {
    ReactDOM.render( <Agreement/> , document.getElementById('agreement'));
}
