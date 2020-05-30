import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 500,
    overflow: "auto",
    padding: 24,
    "& p": {
      marginTop: 10,
      marginBottom: 10
    }
  },
  container: {}
}));

const Document = props => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      onScroll={e => {
          props.scrollEnd();
      }}
    >
      <Typography variant="h6">
        TERMS AND CONDITIONS OF NDEDGE INFORMATICS PRIVATE LIMITED
      </Typography>
      <Typography component="p">
        By browsing or accessing the content or data on NDEDGE INFORMATICS
        PRIVATE LIMITED where this terms and condition appears, you agree to be
        bound by this terms and conditions. If you do not agree to be bound by
        this terms and conditions. Please do not use the tools and resource on
        this site.
      </Typography>
      <Typography component="p">
        By making use of the resource and tools on this site with or without a
        registered account, regardless of how you use or access this site,
        including through mobile devices, you have accepted to be bound by the
        terms and conditions and all guidelines for the use of our services.
      </Typography>
      <Typography component="p">
        The Terms and Conditions shall be a legally binding agreement between
        the User and Administrator, which is subject to the provision of access
        to use of the Resource and to its functionality to the User. Among these
        Terms of Conditions, the agreement between the User and the
        Administrator comprises of specific documents, by which a provision of
        access to use of the Resource is regulated, including Privacy Policy,
        and other documents as developed by the Administrator from time to time.
      </Typography>
      <Typography component="p">
        Administrator reserves the right to change Terms and Condition at any
        given time by publishing the new Terms and Conditions on this website.
        By continuing to use the Service you have accepted to be bound by the
        new Terms and Conditions.{" "}
      </Typography>
      <Typography component="p">
        "Administrator", "we" or "us" - Local Content Administrator or other
        entity that exercise control over the Local Content Administrator, which
        renders the Services to the Users.
      </Typography>
      <Typography component="p">
        "User", "you", "your" – means any natural person eligible to enter into
        an agreement under the applicable law with Administrator for using of
        any of Services with or without a Registered account.
      </Typography>
      <Typography variant="h6">Disclaimer of Warranties </Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED does not offer any warranty as to the
        accuracy, content, completeness, legality, reliability or operability or
        availability of information or material made available to and/or by
        Users. Nor does NDEDGE INFORMATICS PRIVATE LIMITED offer any warranty as
        to the correct communication, presentation or display of the information
        made available to and/or by Users.
      </Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED excludes, in so far as it is allowed
        by law to do so, any warranty whatsoever related to the Services and in
        particular it does not offer any warranty as to fitness for a particular
        purpose and non-infringement of proprietary rights, including
        intellectual property rights.{" "}
      </Typography>
      <Typography component="p">
        Nor does NDEDGE INFORMATICS PRIVATE LIMITED provide any warranties as to
        the integrity and correctness of the information present on its Website
        and as to the services advertised on the Website or advertised and/or
        made available through sites linked thereto.
      </Typography>
      <Typography component="p">
        In particular, with respect to any immovable property that may be
        advertised on the Website,NDEDGE INFORMATICS PRIVATE LIMITED disclaims
        any responsibility as to its peaceful possession, title thereto,
        structural integrity, general conditions and surroundings, and any other
        condition that may attract liability.{" "}
      </Typography>
      <Typography component="p">
        In particular, with respect to any immovable property that may be
        advertised on the Website,NDEDGE INFORMATICS PRIVATE LIMITED disclaims
        any responsibility as to its peaceful possession, title thereto,
        structural integrity, general conditions and surroundings, and any other
        condition that may attract liability.{" "}
      </Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED further disclaims any responsibility
        for any damages whatsoever which may be incurred by any User when making
        use of the Services. NDEDGE INFORMATICS PRIVATE LIMITED disclaims
        responsibility for any improper use of Users’ Personal Data.
      </Typography>
      <Typography variant="h6">Content </Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED shall not be responsible for any
        content displayed on the Website or any content which is linked to the
        Website. NDEDGE INFORMATICS PRIVATE LIMITED does not make any
        representations concerning any effort to review the content and shall
        not be held liable or responsible for the accuracy, copyright or
        trademark compliance or legality of any content.{" "}
      </Typography>
      <Typography variant="h6">Intellectual Property </Typography>
      <Typography component="p">
        All rights, including copyright, in the content of the Website are owned
        or controlled for these purposes by NDEDGE INFORMATICS PRIVATE LIMITED .
        Users may only download the content for your own personal non-commercial
        use.
      </Typography>
      <Typography component="p">
        Users shall are not be allowed to copy, broadcast, download, store (in
        any medium), transmit, show or play in part or in whole, adapt or change
        in any way the content of the Website for any other purpose whatsoever
        without the written permission of NDEDGE INFORMATICS PRIVATE LIMITED
      </Typography>
      <Typography variant="h6">Changes in Terms of Use and Service </Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED reserves the right to change, alter
        or modify the Services from time to time, for any reason, and notice,
        including the right to terminate the services offered by NDEDGE
        INFORMATICS PRIVATE LIMITED. NDEDGE INFORMATICS PRIVATE LIMITED further
        reserves the right to change, alter or modify without prior notice the
        present Terms of Use.
      </Typography>
      <Typography variant="h6">Privacy</Typography>
      <Typography component="p">
        The Privacy Policy of NDEDGE INFORMATICS PRIVATE LIMITED as stated
        hereunder shall not apply vis-à-vis such data and/or information as a
        User may disclose to another User.
      </Typography>
      <Typography variant="h6">Governing Law</Typography>
      <Typography component="p">
        All disagreements, issues or disputes arising from or related to the use
        of the Services and/or to the application, interpretation or
        construction of these Terms of Use shall be resolved in an amicable
        fashion.
      </Typography>
      <Typography component="p">
        Where no amicable settlement is reached within sixty (60) days, the
        disagreement, issue or dispute shall be referred to arbitration in terms
        of the Arbitration Act. The sixty days shall start to run from when
        either NDEDGE INFORMATICS PRIVATE LIMITED or the User shall formally
        notify the other party in writing of the existence of a disagreement,
        issue or dispute. The validity, interpretation and performance of this
        Agreement shall be governed and construed in accordance with the Laws of
        the India. All paragraph headings herein are for convenience only and
        are in no way to be construed as part of this terms and conditions or as
        a limitation of Agreement or as a limitation of the scope of the
        particular section to which they refer.{" "}
      </Typography>
      <Typography variant="h6">Indemnity and Release</Typography>
      <Typography component="p">
        Users shall indemnify NDEDGE INFORMATICS PRIVATE LIMITED and its
        parents, subsidiaries, affiliated companies, officers and employees and
        hold them harmless from any and all claims and expenses, including legal
        fees arising from your use of the Services.
      </Typography>
      <Typography component="p">
        Users shall release NDEDGE INFORMATICS PRIVATE LIMITED and its parents,
        subsidiaries, affiliated companies, officers and employees from any and
        all claims, demands, debts, obligations, damages (actual or
        consequential), costs, and expenses of any kind or nature whatsoever.{" "}
      </Typography>
      <Typography variant="h6">Modification of Service</Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED shall have the right at any time and
        from time to time to modify or discontinue, temporarily or permanently,
        the services provided by NDEDGE INFORMATICS PRIVATE LIMITED, in whole or
        in part, with or without notice.
      </Typography>
      <Typography component="p">
        NDEDGE INFORMATICS PRIVATE LIMITED shall not be liable to any User for
        any modifications, suspension or discontinuance of the Services.
      </Typography>
      <Typography variant="h6">Violation of Terms of Use</Typography>
      <Typography component="p">
        Violations of these Terms of Use or any other rights of NDEDGE
        INFORMATICS PRIVATE LIMITED entitle NDEDGE INFORMATICS PRIVATE LIMITED
        to pursue any and all legal and equitable remedies against the
        responsible User including, without limitation, termination of the
        Services.{" "}
      </Typography>
      <Typography component="p">
        Failure by NDEDGE INFORMATICS PRIVATE LIMITED to enforce any right or
        provision in these Terms of Use shall not constitute a waiver of such
        right or provision or of any other rights or provisions present in these
        Terms of Use.
      </Typography>
      <Typography component="p">
        In the event that a court decides, decrees, judges or in any other way
        considers that one or more rights or provisions set forth in these Terms
        of Use are invalid, the remainder of the Terms of Use shall be
        enforceable and, to the extent permitted by law, the court shall give
        effect to the parties' intentions, as reflected in any such right or
        provision that has been declared invalid or unenforceable.{" "}
      </Typography>
    </Paper>
  );
};

export default Document;
