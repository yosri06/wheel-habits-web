import { LegalHeader, LegalFooter } from "../components/Common";

const PrivacyPolicy = () => {
  return (
    <>
      <LegalHeader />

      <main className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: November 28, 2025</p>

        <div className="highlight-box">
          <p>
            <strong>Summary:</strong> Wheel Habits respects your privacy. All
            your data stays on your device. We don't collect, store, or share
            any personal information.
          </p>
        </div>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Wheel Habits ("we," "our," or "us"). This Privacy Policy
          explains how we handle information when you use our mobile application
          Wheel Habits (the "App"). We are committed to protecting your privacy
          and being transparent about our practices.
        </p>

        <h2>2. Information We Collect</h2>

        <h3>2.1 Personal Data</h3>
        <p>
          <strong>We do not collect any personal data.</strong> The App is
          designed to function entirely offline and locally on your device. Your
          habits, activities, journal entries, and all other data you create
          within the App are stored only on your device.
        </p>

        <h3>2.2 Data Stored Locally</h3>
        <p>The following information is stored locally on your device only:</p>
        <ul>
          <li>Habit names and completion status</li>
          <li>Wheel activities and their weights</li>
          <li>Journal entries and timestamps</li>
          <li>Reminder settings and notification preferences</li>
          <li>Streak and progress data</li>
          <li>
            (Optional) Mosque ID for Muslim prayer times (if you choose to
            enable this feature)
          </li>
          <li>
            (Optional) Timezone information used only to provide accurate prayer
            times
          </li>
          <li>App preferences and settings</li>
        </ul>

        <h3>2.3 Third-Party Services</h3>
        <p>The App may connect to the following third-party services:</p>
        <ul>
          <li>
            <strong>Prayer Times:</strong> If you enable the optional Muslim
            prayer times feature, the App fetches prayer times from our server
            using the mosque ID you provide. Only the mosque ID and your
            device's timezone are sent to retrieve accurate prayer times. This
            feature is intended for Muslim users who choose to enable it and is
            disabled by default. No personal information is transmitted or
            stored on our server.
          </li>
          <li>
            <strong>Google Fonts:</strong> The App uses Google Fonts to display
            text. When loading fonts, your device may connect to Google servers.
            Please refer to{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's Privacy Policy
            </a>{" "}
            for more information.
          </li>
          <li>
            <strong>Device Timezone:</strong> The App uses your device's
            timezone settings to display accurate prayer times and schedule
            notifications. This information is only sent to our server when
            fetching prayer times.
          </li>
        </ul>

        <h2>3. How We Use Information</h2>
        <p>
          Since we don't collect any personal information on our servers, we
          don't use your data for analytics, advertising, tracking, or any other
          commercial purpose. All core data processing happens locally on your
          device to provide the App's functionality:
        </p>
        <ul>
          <li>Displaying and tracking your habits</li>
          <li>Managing wheel activities and spins</li>
          <li>Recording journal entries</li>
          <li>Sending local notifications for reminders and prayer times</li>
          <li>Calculating streaks and progress</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>
          <strong>We do not share any personal data with third parties.</strong>{" "}
          The only external communication is:
        </p>
        <ul>
          <li>
            Fetching prayer times from our server (mosque ID and timezone only)
          </li>
          <li>Loading fonts from Google Fonts servers</li>
        </ul>
        <p>No personal information is transmitted in either case.</p>

        <h2>5. Data Security</h2>
        <p>
          Your data is stored using your device's local storage mechanisms
          (SharedPreferences). The security of your data depends on:
        </p>
        <ul>
          <li>Your device's security settings (screen lock, encryption)</li>
          <li>Physical access to your device</li>
          <li>Your personal security practices</li>
        </ul>
        <p>
          We recommend keeping your device secure and using appropriate security
          measures such as screen locks and device encryption.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          Your data remains on your device for as long as you use the App. You
          can delete all your data at any time by:
        </p>
        <ul>
          <li>Clearing the App's data through your device settings</li>
          <li>Uninstalling the App</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          The App does not knowingly collect any personal information from
          anyone, including children under 13 years of age. Since all data is
          stored locally and we don't collect any information, the App is safe
          for users of all ages.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Since we don't collect or store any of your personal data on our
          servers, traditional data rights (access, correction, deletion,
          portability) are exercised directly through your device:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> All your data is visible within the App
          </li>
          <li>
            <strong>Correction:</strong> You can edit any data within the App
          </li>
          <li>
            <strong>Deletion:</strong> You can delete data within the App or by
            clearing the App's data
          </li>
          <li>
            <strong>Portability:</strong> Your data exists only on your device
          </li>
        </ul>

        <h2>9. Notifications</h2>
        <p>
          The App may request permission to send local notifications for habit
          reminders and, optionally, Muslim prayer times. These notifications:
        </p>
        <ul>
          <li>Are generated and scheduled entirely on your device</li>
          <li>Do not involve any server communication</li>
          <li>Use your device's timezone for accurate scheduling</li>
          <li>
            Can be disabled at any time through your device settings or within
            the App
          </li>
          <li>
            Prayer time notifications are optional and disabled by default, and
            are only active if you enable the Muslim prayer feature.
          </li>
        </ul>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by:
        </p>
        <ul>
          <li>Posting the new Privacy Policy on this page</li>
          <li>Updating the "Last updated" date at the top of this policy</li>
        </ul>
        <p>
          We encourage you to review this Privacy Policy periodically for any
          changes.
        </p>

        <h2>11. Open Source</h2>
        <p>
          Wheel Habits is committed to transparency. The App's code may be made
          available for review to demonstrate our privacy practices.
        </p>

        <div className="contact-box">
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our
            practices, please contact us:
          </p>
          <a href="mailto:pactence@tutamail.com" className="btn btn-primary">
            pactence@tutamail.com
          </a>
        </div>
      </main>

      <LegalFooter />
    </>
  );
};

export default PrivacyPolicy;
